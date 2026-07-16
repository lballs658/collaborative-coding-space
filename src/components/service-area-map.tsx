import { useEffect, useRef, useState } from "react";

export function ServiceAreaMap() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || !containerRef.current) return;
    let cleanup = () => {};
    let cancelled = false;

    (async () => {
      const L = (await import("leaflet")).default;
      await import("leaflet/dist/leaflet.css");
      if (cancelled || !containerRef.current) return;

      const map = L.map(containerRef.current, {
        zoomControl: true,
        scrollWheelZoom: false,
        attributionControl: true,
      }).setView([40.82, -74.1], 9);

      L.tileLayer(
        "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
          maxZoom: 18,
        },
      ).addTo(map);

      try {
        const res = await fetch("/service-area.geojson");
        const data = await res.json();
        if (cancelled) return;

        const layer = L.geoJSON(data, {
          style: () => ({
            color: "#38bdf8",
            weight: 1.5,
            opacity: 0.9,
            fillColor: "#38bdf8",
            fillOpacity: 0.18,
          }),
          onEachFeature: (feature, layer) => {
            const name = feature?.properties?.name;
            if (name) layer.bindTooltip(name, { sticky: true });
          },
        }).addTo(map);

        map.fitBounds(layer.getBounds(), { padding: [10, 10] });
      } catch (err) {
        console.error("Failed to load service area boundaries", err);
      }

      cleanup = () => map.remove();
    })();

    return () => {
      cancelled = true;
      cleanup();
    };
  }, [mounted]);

  return (
    <div
      ref={containerRef}
      className="h-[260px] w-full bg-surface"
      aria-label="Auto Lab Solutions service area map"
    />
  );
}
