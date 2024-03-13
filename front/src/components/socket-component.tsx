"use client";

import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export default function SocketComponent() {
  const [data, setData] = useState({});

  useEffect(() => {
    const socket = io("http://192.168.0.111:8080");

    socket.on("init", (data: any) => {
      delete data.total;
      setData(data);
      console.log("init");
    });

    socket.on("sync", (data: any) => {
      delete data.total;
      setData(data);
      console.log("sync");
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div className="w-full grid grid-cols-4 gap-4">
      {Object.entries(data).map(([key, value]) => (
        <Card key={key}>
          <CardHeader>
            <CardTitle className="uppercase">{key}</CardTitle>
            {/* <CardDescription>Card Description</CardDescription> */}
          </CardHeader>
          <CardContent className="text-2xl text-end">{`${value}`}</CardContent>
          {/* <CardFooter>
            <p>Card Footer</p>
          </CardFooter> */}
        </Card>
      ))}
    </div>
  );
}
