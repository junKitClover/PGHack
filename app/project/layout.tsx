import SideBar from "./sideBar";
import { Grid } from "component/organisms";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <Grid col={[1, "1by6"]} gap={3}>
        <SideBar />
        {children}
      </Grid>
  );
}
