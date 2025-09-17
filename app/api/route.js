import { DUMMY_NEWS } from "@/dummy-news";
import { NextResponse } from "next/server";

export function GET(request) {
    return NextResponse.json({news: DUMMY_NEWS})
}