import CartPageClient from "@/components/CartPageClient"

async function getCartData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/cart`, {
    cache: "no-store"
  })

  return res.json()
}

export default async function Home() {
  const data = await getCartData()

  return <CartPageClient data={data} />
}