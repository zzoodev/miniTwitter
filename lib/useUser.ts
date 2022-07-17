import { User } from "@prisma/client";
import { useRouter } from "next/router";
import { useEffect } from "react";
import useSWR from "swr";

export default function () {
  interface UserResponse {
    ok: boolean;
    profile: User;
  }
  const { data, error } = useSWR<UserResponse>("/api/user/me");
  const router = useRouter();

  useEffect(() => {
    if (data && !data.ok) {
      router.replace("/login");
    }
  }, [router, data]);

  return { user: data?.profile, isLoading: !data && !error };
}
