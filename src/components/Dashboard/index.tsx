import { Container } from "./styles";
import { Summary } from "../Summary";
import { TransactionsTable } from "../TransactionsTable";

export function Dashborard() {
  return (
    <Container>
      <Summary />
      <TransactionsTable />
    </Container>
  );
}
