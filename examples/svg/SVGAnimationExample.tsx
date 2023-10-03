export function SVGAnimationExample() {
  return (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" width={200}>
      <rect width="100" height="100" fill="red">
        <animate
          attributeName="rx"
          values="0;100;0"
          dur="1s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="height"
          values="100;200;100"
          dur="10s"
          repeatCount="indefinite"
        />
      </rect>
    </svg>
  );
}
