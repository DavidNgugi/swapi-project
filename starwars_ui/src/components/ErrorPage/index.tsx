import React from "react";
import { useRouteError } from "react-router-dom";

interface Error{
    status: number;
    statusText: string;
}
const ErrorPage: React.FC = () => {
  const error = useRouteError() as Error | undefined;

  let message;

  if (error?.status === 404) {
    message = <p>There's nothing here.</p>;
  } else if (error?.status === 500) {
    message = <p>There was a problem fetching the data for this page.</p>;
  } else {
    message = <p>An unexpected error occurred.</p>;
  }

  return (
    <div className="error-page">
      <span>
        {error?.statusText ?? "Error!"}
        {message}
      </span>
    </div>
  );
}

export default ErrorPage;