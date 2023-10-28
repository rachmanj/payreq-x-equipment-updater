import { NextResponse } from "next/server";

import { db } from "@/lib/db";

export async function GET() {
  const equipments = await db.equipment.findMany();
  return NextResponse.json(equipments);
}

export async function POST(req: Request) {
  const body = await req.json();

  const equipment = await db.equipment.create({
    data: body,
  });

  return NextResponse.json(equipment);
}

// delete all equipments
export async function DELETE() {
  const equipments = await db.equipment.deleteMany();
  return NextResponse.json(equipments);
}
