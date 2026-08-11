export function StoreMap({ address }: { address: string }) {
  const query = encodeURIComponent(address);

  return (
    <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem]">
      <iframe
        title="Xpress Spa & Nails location"
        src={`https://www.google.com/maps?q=${query}&output=embed`}
        className="absolute inset-0 h-full w-full grayscale-[15%]"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
