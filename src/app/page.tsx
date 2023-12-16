"use client";
import AppTable from "@/components/AppTable";
import { Container } from "@mui/material";
import Link from "next/link";
import { useEffect } from "react";
import useSWR from "swr";
import axios from 'axios';
import useSWRImmutable from 'swr/immutable'

export default function Page() {
  const fetcher = (url : string) => axios.get(url).then(res => res.data)

  const {data,error,isLoading} = useSWRImmutable("http://localhost:8000/blogs",fetcher, {
  });
  console.log(data)
  if (!data) {
    return <div>...Loading</div>
  }
  return (
    <Container maxWidth="sm">
      <ul>
        <li>
          <Link href="/facebook">facebook</Link>
        </li>
        <li>
          <Link href="/tiktok">tiktok</Link>
        </li>
        <li>
          <Link href="/youtube">youtube</Link>
        </li>
      </ul>
      <AppTable blogs={data}/>
    </Container>
  );
}
