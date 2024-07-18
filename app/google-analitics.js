import ReactGA from "react-ga4";

const initializeGA = () => {
  // Replace with your Measurement ID
  // It ideally comes from an environment variable
  ReactGA.initialize(process.env.NEXT_PUBLIC_MEASUREMENT_ID);
  // Don't forget to remove the console.log() statements
  // when you are done
  console.log("GA INITIALIZED");
};

const trackGAEvent = (label) => {
  // Send GA4 Event
  ReactGA.event({
    action: "open_accordion",
    category: "massage",
    label: "User opened " + label,
    value: label,
  });
};

export default initializeGA;
export { initializeGA, trackGAEvent };
