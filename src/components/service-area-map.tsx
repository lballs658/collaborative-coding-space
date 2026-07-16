import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import serviceArea from "@/data/service-area.json";

export default function ServiceAreaMap() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    const map = L.map(containerRef.current, {
      zoomControl: true,
      scrollWheelZoom: false,
      attributionControl: true,
    });
    mapRef.current = map;

    L.tileLayer(
      "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
      {
        attribution:
          '&copy; <a href="https://openstreetmap.org">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: "abcd",
        maxZoom: 19,
      },
    ).addTo(map);

    const layer = L.geoJSON(serviceArea as GeoJSON.FeatureCollection, {
      style: {
        color: "#ef4444",
        weight: 2,
        opacity: 0.95,
        dashArray: "6 5",
        fillColor: "#ef4444",
        fillOpacity: 0.12,
      },
      onEachFeature: (feature, lyr) => {
        const name = feature.properties?.name;
        if (name) lyr.bindTooltip(name, { sticky: true });
      },
    }).addTo(map);

    map.fitBounds(layer.getBounds(), { padding: [12, 12] });

    const handleResize = () => map.invalidateSize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      map.remove();
      mapRef.current = null;
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="block h-[260px] w-full"
      aria-label="Auto Lab Solutions service area covering Bergen, Hudson, Essex, Passaic, Morris, and Union counties in NJ, plus Staten Island, Brooklyn, and Manhattan in NYC"
    />
  );
}
