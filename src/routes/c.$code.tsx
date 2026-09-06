import { createFileRoute, Navigate } from "@tanstack/react-router";

export const Route = createFileRoute("/c/$code")({ component: Redeem });

function Redeem() {
  return <Navigate to="/" />;
}
