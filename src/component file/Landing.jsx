export default function Header() {
  return (
    <div className="landing">
      <video loop={true} muted={true} autoPlay={true}>
        <source src="/landing-background.mp4" />
      </video>
      <div className="text-section">
        <h1>Blue Arrow Events</h1>
        <h2>We Take You To a New Level</h2>
      </div>
    </div>
  );
}
