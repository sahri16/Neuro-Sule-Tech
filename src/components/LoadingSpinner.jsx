import { useLoading } from "./LoadingProvider";
import "../style/LoadingSpinner.css";

function LoadingSpinner() {
  const { loading } = useLoading();

  if (!loading) return null;

  return (
    <div className="loading-overlay">
      <div className="loader">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default LoadingSpinner;