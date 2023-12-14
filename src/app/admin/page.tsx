import Link from "next/link";

export default function Page() {
  return (
    <ul>
        <li><Link href="/admin/facebook">Facebook</Link></li>
        <li><Link href="/admin/tiktok">tiktok</Link></li>
        <li><Link href="/admin/youtube">youtube</Link></li>
     
    </ul>
  );
}
