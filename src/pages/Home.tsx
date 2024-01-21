import IcEazy from "/imgs/Ic.jpg";

export function Home() {
  return (
    <div className="text-center">
      <h1>Welcome to IcEazy's Store</h1>
      <img
        style={{
          width: "100%",
          height: "100vh",
          objectFit: "cover",
          borderRadius: "10px",
        }}
        src={IcEazy}
        alt="home"
      />
    </div>
  );
}
