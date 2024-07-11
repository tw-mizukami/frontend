import React, { useEffect, useState } from 'react';
import { NextResponse } from "next/server";
import { Machine } from '../Type';      // Machine型をインポート

export function GET() {
    // ここにBackendからの応答処理を書く？一旦は下記のデータを取得するものとする。
    const [machines, setMachines] = useState<Machine[]>([
        { ipAdr: '192.168.0.100', speed:'15000', goodNum:'10000000', NgNum:'1500' },
      ]);

    return NextResponse.json(
        machines,
    );
}

export async function POST(request) {
    const res = await request.json();
    
}