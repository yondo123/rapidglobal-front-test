import { Product } from '@dto/product.model.dto';
import { readFileSync, writeFileSync } from 'fs';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { id, title } = await req.json();

  const dataStr = readFileSync('data.json', 'utf-8');
  const dataList: Product[] = JSON.parse(dataStr);

  const filteredProduct = dataList.find((product) => product.id === id);
  if (!filteredProduct) {
    return NextResponse.json(
      {
        success: false
      },
      {
        status: 404
      }
    );
  }

  filteredProduct.title = title;
  writeFileSync('data.json', JSON.stringify(dataList));
  return NextResponse.json(
    {
      success: true
    },
    {
      status: 200
    }
  );
}
