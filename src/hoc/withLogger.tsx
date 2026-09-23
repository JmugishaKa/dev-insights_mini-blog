import { useEffect, type ComponentType } from "react";

/**
 * withLogger is a Higher-Order Component (HOC): taking a component and
 * returniing a new component that logs to the console when the wrapped
 * component mounts and unmounts, without changing the wrapped component's
 * own logic.
 */
function withLogger<P extends object>(WrappedComponent: ComponentType<P>) {
  function WithLogger(props: P) {
    const name = WrappedComponent.displayName || WrappedComponent.name || "Component";

    useEffect(() => {
      console.log(`[withLogger] ${name} mounted`);
      return () => {
        console.log(`[withLogger] ${name} unmounted`);
      };
    }, [name]);

    return <WrappedComponent {...props} />;
  }

  WithLogger.displayName = `withLogger(${WrappedComponent.displayName || WrappedComponent.name || "Component"})`;

  return WithLogger;
}

export default withLogger;
