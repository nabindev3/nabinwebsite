// Pass-through template. The actual page content lives in <FullPage> mounted
// in app/layout.jsx so scrolling is continuous across routes — no per-route
// re-mount, no fade transitions getting in the way of natural scroll flow.
export default function Template({ children }) {
  return children;
}
