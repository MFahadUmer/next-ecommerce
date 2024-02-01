import prismadb from '@/lib/prismadb';
import { auth } from '@clerk/nextjs';
import { NextResponse } from 'next/server';

export async function PATCH(
  req: Request,
  { params }: { params: { storeId: string } }
) {
  try {
    const { userId } = auth();
    if (!userId) {
      return new NextResponse('Unauthenticated', { status: 401 });
    }
    const body = await req.json();
    const { name } = body;
    if (!name) {
      return new NextResponse('Missing name', { status: 400 });
    }

    if (!params.storeId) {
      return new NextResponse('Missing storeId', { status: 400 });
    }
    const store = await prismadb.store.updateMany({
      where: {
        id: params.storeId,
        userId,
      },
      data: {
        name: name,
      },
    });
    return NextResponse.json(store);
  } catch (error) {
    console.log('[STORE_PATCH]', error);
    3;
    return new NextResponse('Internal error', { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { storeId: string } }
) {
  try {
    const { userId } = auth();
    if (!userId) {
      return new NextResponse('Unauthenticated', { status: 401 });
    }

    if (!params.storeId) {
      return new NextResponse('Missing storeId', { status: 400 });
    }
    const store = await prismadb.store.deleteMany({
      where: {
        id: params.storeId,
        userId,
      },
    });
    return NextResponse.json(store);
  } catch (error) {
    console.log('[STORE_DELETE]', error);
    3;
    return new NextResponse('Internal error', { status: 500 });
  }
}