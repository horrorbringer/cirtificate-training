import { CheckoutFlow } from "@/components/checkout-flow";

export default async function CheckoutPage({
  searchParams,
}: {
  searchParams: Promise<{ plan?: string }>;
}) {
  const { plan } = await searchParams;
  return (
    <CheckoutFlow initialPlan={plan === "monthly" ? "monthly" : "yearly"} />
  );
}
