/**
 * Admin authentication adapter.
 * Replace with NextAuth, Clerk, or a custom session against the database.
 * Never ship a hardcoded password.
 */
export interface AdminSession {
  userId: string;
  email: string;
  role: "admin" | "advisor";
}

export interface AuthProvider {
  login(email: string, password: string): Promise<AdminSession>;
  logout(): Promise<void>;
  getSession(): Promise<AdminSession | null>;
}

export class UnconfiguredAuthProvider implements AuthProvider {
  async login(): Promise<AdminSession> {
    throw new Error("Authentification admin non configurée (ADMIN_SESSION_SECRET).");
  }
  async logout(): Promise<void> {}
  async getSession(): Promise<AdminSession | null> {
    if (process.env.NODE_ENV !== "production") {
      return { userId: "demo", email: "admin@salamkheweulautomobile.sn", role: "admin" };
    }
    return null;
  }
}

export const authProvider: AuthProvider = new UnconfiguredAuthProvider();
