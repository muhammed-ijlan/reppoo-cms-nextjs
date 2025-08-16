"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface ProtectedProps {
  children: React.ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedProps) => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (!token) {
      router.push("/login");
    } else {
      setLoading(false);
    }
  }, [router]);

  if (loading) return <div>Loading...</div>;

  return <>{children}</>;
};

export default ProtectedRoute;
