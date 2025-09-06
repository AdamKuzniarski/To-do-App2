import { useSession, signIn, signOut } from "next-auth/react";
import styled from "styled-components";

const Row = styled.div`
  display: inline-flex;
  gap: 12px;
  align-items: center;
`;
const Btn = styled.button`
  padding: 8px 12px;
  border-radius: 8px;
  border: 1px solid var(--pb-300, #85c3ff);
  background: var(--pb-50, #e8f6ff);
  font-weight: 600;
  cursor: pointer;
`;
const Avatar = styled.img`
  width: 28px;
  height: 28px;
  border-radius: 50%;
`;

export default function AuthButtons() {
  const { data: session, status } = useSession();
  if (status === "loading") return <Btn disabled>Lade Auth…</Btn>;
  if (!session)
    return (
      <Btn onClick={() => signIn("google", { callbackUrl: "/" })}>
        Mit Google anmelden
      </Btn>
    );
  return (
    <Row>
      {session.user?.image && <Avatar src={session.user.image} alt="" />}
      <span>{session.user?.name ?? session.user?.email}</span>
      <Btn onClick={() => signOut({ callbackUrl: "/" })}>Abmelden</Btn>
    </Row>
  );
}
