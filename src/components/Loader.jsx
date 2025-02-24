import { Html, useProgress } from "@react-three/drei";
import { useEffect } from "react";

const Loader = () => {
  const { progress } = useProgress();

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <Html>
      <span>
        <p
          style={{
            fontWeight: "bold",
          }}
        >
          {progress.toFixed(2)}%
        </p>
      </span>
    </Html>
  );
};

export default Loader;
