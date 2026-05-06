"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  CalendarCheck,
  MapPin,
  Phone,
  Camera,
  ShoppingBag,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Page() {
  const products = [
    {
      title: "Fresas cubiertas de chocolate",
      desc: "Cajas decoradas con chocolate, colores y detalles personalizados.",
      price: "Desde $35",
    },
    {
      title: "Tablas de charcutería",
      desc: "Quesos, salami, frutas, crackers y presentación premium.",
      price: "Desde $55",
    },
    {
      title: "Cajas con letras",
      desc: "Iniciales decoradas con fresas, rosas o charcutería.",
      price: "Desde $65",
    },
  ];

  const steps = [
    "Escoge el producto",
    "Elige tamaño y diseño",
    "Confirma fecha",
    "Recibe tu pedido listo",
  ];

  const whatsappNumber = "18134662672";
  const whatsappMessage =
    "Hola, quiero cotizar un pedido.\n\nProducto:\nFecha:\nCantidad:\nDiseño o idea:\n\n¿Me puedes ayudar con opciones y precio?";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <main className="min-h-screen bg-[#fff7f8] text-[#3b2528]">
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-[#fff7f8]/90 backdrop-blur border-b border-pink-100">
        <div className="max-w-6xl mx-auto px-5 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Cheeseberry Delights"
              width={42}
              height={42}
              className="rounded-full shadow-sm"
            />
            <span className="font-serif text-xl md:text-2xl font-bold">
              Cheeseberry Delights
            </span>
          </div>

          <a href={whatsappLink} target="_blank">
            <Button className="rounded-full bg-[#8b2f47] text-white px-5 py-2">
              Cotizar y ordenar ahora
            </Button>
            <p className="mt-3 text-sm text-[#8b2f47] font-semibold">
  ⚠️ Cupos limitados por día · Ordena con anticipación
</p>
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-5 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="flex items-center gap-3 mb-6">
            <Image
              src="/logo.png"
              alt="Cheeseberry Delights"
              width={54}
              height={54}
              className="rounded-full shadow-md"
            />
            <span className="text-sm tracking-[0.18em] text-[#8b2f47] uppercase font-semibold">
              Cheeseberry Delights
            </span>
          </div>

          <h1 className="font-serif text-5xl md:text-6xl font-bold leading-tight text-[#3a2a2a]">
            Eventos especiales merecen detalles deliciosos
          </h1>

          <p className="mt-5 text-lg text-[#6b4a50]">
            Fresas cubiertas, cajas personalizadas y charcutería premium para
            cumpleaños, aniversarios, baby showers, reuniones y detalles especiales.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <a href={whatsappLink} target="_blank">
              <Button className="rounded-full bg-[#8b2f47] text-white px-8 py-6 text-base shadow-md">
                Ordenar por WhatsApp
              </Button>
            </a>

            <a href="#productos">
              <Button className="rounded-full border border-[#8b2f47] text-[#8b2f47] bg-white px-8 py-6 text-base">
                Ver opciones
              </Button>
            </a>
          </div>

          <p className="mt-4 text-sm text-[#7b5a60]">
            Pedidos personalizados · Entregas locales · Atención rápida
          </p>
        </motion.div>

        <div className="bg-white p-4 rounded-[2rem] shadow-2xl">
          <div className="aspect-[4/5] rounded-[1.5rem] overflow-hidden">
            <Image
              src="/principal.jpg"
              alt="Producto principal"
              width={700}
              height={900}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* PRODUCTOS */}
      <section id="productos" className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-12">
            <p className="text-[#8b2f47] font-semibold uppercase tracking-[0.2em] text-sm">
              Catálogo
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mt-3">
              Opciones más pedidas
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {products.map((item) => (
              <Card
                key={item.title}
                className="rounded-3xl border border-pink-100 shadow-sm hover:shadow-xl transition overflow-hidden bg-[#fffafa]"
              >
                <div className="h-44 flex items-center justify-center bg-gradient-to-br from-pink-100 to-rose-200">
                  <ShoppingBag className="w-14 h-14 text-[#8b2f47]" />
                </div>

                <CardContent className="p-6">
                  <h3 className="font-serif text-2xl font-bold mb-3">
                    {item.title}
                  </h3>
                  <p className="text-[#6b4a50] mb-4">{item.desc}</p>
                  <p className="font-bold text-[#8b2f47]">{item.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CONFIANZA */}
      <section className="bg-[#fff7f8] py-12">
        <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-3 gap-6 text-center">
          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <p className="font-bold text-xl">Pedidos personalizados</p>
            <p className="text-sm mt-2 text-[#6b4a50]">
              Colores, letras y detalles según la ocasión.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <p className="font-bold text-xl">Presentación premium</p>
            <p className="text-sm mt-2 text-[#6b4a50]">
              Diseños listos para regalar o llevar a eventos.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <p className="font-bold text-xl">Ordena por WhatsApp</p>
            <p className="text-sm mt-2 text-[#6b4a50]">
              Respuesta rápida para confirmar disponibilidad.
            </p>
          </div>
        </div>
      </section>

      {/* GALERÍA POR CATEGORÍAS */}
<section id="galeria" className="py-16 bg-white">
  <div className="max-w-6xl mx-auto px-5">
    <div className="text-center mb-12">
      <p className="text-[#8b2f47] font-semibold uppercase tracking-[0.2em] text-sm">
        Galería
      </p>
      <h2 className="font-serif text-4xl md:text-5xl font-bold mt-3">
        Elige el estilo de tu pedido
      </h2>
      <p className="mt-4 text-[#6b4a50]">
        Separamos las opciones para que encuentres rápido lo que necesitas.
      </p>
    </div>

    {/* CHARCUTERÍA */}
    <div className="mb-14">
      <h3 className="font-serif text-3xl font-bold mb-6 text-[#3b2528]">
        Charcutería
      </h3>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          "charcuteria-1.jpg",
          "charcuteria-2.jpg",
          "charcuteria-3.jpg",
          "charcuteria-4.jpg",
          "charcuteria-5.jpg",
          "charcuteria-6.jpg",
        ].map((img) => (
          <Image
            key={img}
            src={`/${img}`}
            alt="Charcutería"
            width={400}
            height={400}
            className="aspect-square w-full object-cover rounded-3xl shadow-md"
          />
        ))}
      </div>
    </div>

    {/* FRESAS CUBIERTAS */}
    <div className="mb-14">
      <h3 className="font-serif text-3xl font-bold mb-6 text-[#3b2528]">
        Fresas cubiertas
      </h3>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          "fresas-1.jpg",
          "fresas-2.jpg",
          "fresas-3.jpg",
          "fresas-4.jpg",
          "fresas-5.jpg",
          "fresas-6.jpg",
          "fresas-7.jpg",
          "fresas-8.jpg",
          "fresas-9.jpg",
          "fresas-10.jpg",
          "fresas-11.jpg",
          "fresas-12.jpg",
          "fresas-13.jpg",
          "fresas-14.jpg",
          "fresas-15.jpg",
          "fresas-16.jpg",
          "fresas-17.jpg",
          "fresas-18.jpg",
          "fresas-19.jpg",
        ].map((img) => (
          <Image
            key={img}
            src={`/${img}`}
            alt="Fresas cubiertas"
            width={400}
            height={400}
            className="aspect-square w-full object-cover rounded-3xl shadow-md"
          />
        ))}
      </div>
    </div>

    {/* REPOSTERÍA */}
    <div>
      <h3 className="font-serif text-3xl font-bold mb-6 text-[#3b2528]">
        Repostería
      </h3>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          "reposteria-1.jpg",
          "reposteria-2.jpg",
          "reposteria-3.jpg",
          "reposteria-4.jpg",
        ].map((img) => (
          <Image
            key={img}
            src={`/${img}`}
            alt="Repostería"
            width={400}
            height={400}
            className="aspect-square w-full object-cover rounded-3xl shadow-md"
          />
        ))}
      </div>
    </div>
  </div>
</section>

      {/* PASOS */}
      <section id="pedidos" className="bg-[#3b2528] text-white py-16">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-12">
            <p className="text-pink-200 font-semibold uppercase tracking-[0.2em] text-sm">
              Cómo ordenar
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mt-3">
              Pedidos fáciles y rápidos
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-5">
            {steps.map((step, i) => (
              <div
                key={step}
                className="bg-white/10 rounded-3xl p-6 border border-white/10"
              >
                <div className="w-11 h-11 rounded-full bg-[#8b2f47] flex items-center justify-center font-bold mb-5">
                  {i + 1}
                </div>
                <p className="font-semibold">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-2 gap-10">
          <div>
            <p className="text-[#8b2f47] font-semibold uppercase tracking-[0.2em] text-sm">
              Contacto
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mt-3 mb-5">
              Reserva tu pedido con anticipación
            </h2>

            <p className="mb-4 flex gap-3 text-[#6b4a50]">
              <Phone className="text-[#8b2f47]" /> WhatsApp: (813) 466-2672
            </p>
            <p className="mb-4 flex gap-3 text-[#6b4a50]">
              <Camera className="text-[#8b2f47]" /> Instagram: @cheesebrry_delights
            </p>
            <p className="mb-4 flex gap-3 text-[#6b4a50]">
              <MapPin className="text-[#8b2f47]" /> Ubicacion: Merritt Island, FL
            </p>
            <p className="flex gap-3 text-[#6b4a50]">
              <CalendarCheck className="text-[#8b2f47]" /> Pedidos con 24–48
              horas de anticipación
            </p>
          </div>

          <div className="bg-[#fff7f8] p-8 rounded-3xl border border-pink-100 shadow-lg">
            <h3 className="font-serif text-3xl font-bold mb-4">
              Haz tu pedido
            </h3>
            <p className="text-[#6b4a50] mb-6">
              Escríbenos por WhatsApp y confirma disponibilidad, precio y diseño.
            </p>

            <a href={whatsappLink} target="_blank">
              <Button className="w-full bg-[#8b2f47] text-white rounded-full py-6 text-base">
                Enviar pedido por WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* BOTÓN FLOTANTE */}
      <a
        href={whatsappLink}
        target="_blank"
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white px-5 py-4 rounded-full shadow-xl hover:scale-110 transition font-semibold"
      >
        💬 Ordenar
      </a>
    </main>
  );
}