"use client";

import React from "react";
import { motion } from "framer-motion";
import { Heart, Gift, CalendarCheck, MapPin, Phone, Camera, Star, ShoppingBag } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Page() {
  const products = [
    {
      title: "Fresas cubiertas de chocolate",
      desc: "Cajas elegantes para cumpleaños, aniversarios y regalos.",
      price: "Desde $25",
    },
    {
      title: "Tablas de queso y charcutería",
      desc: "Tablas personalizadas con quesos, frutas y detalles premium.",
      price: "Desde $45",
    },
    {
      title: "Cajas personalizadas con letras",
      desc: "Diseños con iniciales, rosas y fresas.",
      price: "Cotización personalizada",
    },
  ];

  const steps = [
    "Escoge el producto",
    "Elige tamaño y diseño",
    "Confirma fecha",
    "Recibe tu pedido listo",
  ];
  const whatsappNumber = "18134662672";
const whatsappMessage = "Hola, quiero hacer un pedido personalizado.";
const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <main className="min-h-screen bg-[#fff7f8] text-[#3b2528]">
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-[#fff7f8]/90 backdrop-blur border-b border-pink-100">
        <div className="max-w-6xl mx-auto px-5 py-4 flex items-center justify-between">
          <div className="font-serif text-2xl font-bold">
            ChesseBerry Delights
          </div>
          <Button className="rounded-full bg-[#8b2f47] text-white">
            <a href={whatsappLink} target="_blank">
  <Button className="rounded-full bg-[#8b2f47] text-white">
    <a href={whatsappLink} target="_blank">
  <Button className="rounded-full bg-[#8b2f47] text-white">
    Ordenar ahora
  </Button>
</a>
  </Button>
</a>
          </Button>
        </div>
      </header>

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-5 py-16 grid md:grid-cols-2 gap-10 items-center">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <h1 className="font-serif text-5xl font-bold mb-6">
            Eventos especiales merecen delicias especiales.
          </h1>
          <p className="text-lg mb-6">
            Fresas cubiertas de chocolate y tablas de charcutería para toda ocasión.
          </p>
          <Button className="rounded-full bg-[#8b2f47] text-white px-6 py-4">
            Ver catálogo
          </Button>
        </motion.div>

        <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-xl">
          <img
            src="/principal.jpg"
            alt="Caja premium"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* PRODUCTOS */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-3 gap-6">
          {products.map((item) => (
            <Card key={item.title} className="rounded-3xl shadow-md">
              <div className="h-40 flex items-center justify-center">
                <ShoppingBag />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="text-sm">{item.desc}</p>
                <p className="font-bold mt-3">{item.price}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* GALERÍA */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-5 grid grid-cols-2 gap-4">
          <img src="/galeria-11.jpg" className="rounded-2xl object-cover" />
          <img src="/galeria-3.jpg" className="rounded-2xl object-cover" />
          <img src="/galeria-44.jpg" className="rounded-2xl object-cover" />
          <img src="/galeria-2.jpg" className="rounded-2xl object-cover" />
        </div>
      </section>

      {/* PASOS */}
      <section className="bg-[#3b2528] text-white py-16">
        <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div key={step} className="bg-white/10 p-6 rounded-2xl">
              <p className="font-bold mb-2">{i + 1}</p>
              <p>{step}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACTO */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold mb-4">Contacto</h2>
            <p className="mb-3 flex gap-2">
              <Phone /> WhatsApp: (813) 466-2672
            </p>
            <p className="mb-3 flex gap-2">
              <Camera /> Instagram: @chesseberry_delights
            </p>
            <p className="flex gap-2">
              <MapPin /> Merritt Island / Cocoa / Orlando, FL
            </p>
          </div>

          <div className="bg-[#fff7f8] p-6 rounded-2xl">
            <h3 className="text-xl font-bold mb-4">Haz tu pedido</h3>
            <input className="w-full mb-3 p-3 rounded" placeholder="Nombre" />
            <input className="w-full mb-3 p-3 rounded" placeholder="Teléfono" />
            <textarea className="w-full mb-3 p-3 rounded" placeholder="Pedido" />
            <Button className="w-full bg-[#8b2f47] text-white">
              <a href={whatsappLink} target="_blank">
  <Button className="w-full bg-[#8b2f47] text-white">
    Enviar por WhatsApp
  </Button>
</a>
            </Button>
          </div>
        </div>
      </section>
      <a
  href={whatsappLink}
  target="_blank"
  className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-xl hover:scale-110 transition"
>
 💬 Ordenar 
</a>
    </main>
  );
}