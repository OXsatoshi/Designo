"use client";

import dynamic from "next/dynamic";

const MapView = dynamic(() => import("./map-view"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full bg-light-peach animate-pulse flex items-center justify-center text-peach font-medium">
      Loading Map...
    </div>
  ),
});

export default function MapContainerWrapper({
  center,
}: {
  center: [number, number];
}) {
  return <MapView center={center} />;
}
