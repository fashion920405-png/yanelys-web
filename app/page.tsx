"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  CalendarCheck,
  MapPin,
  Phone,
  Camera,
  ShoppingBag,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Page() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [language, setLanguage] = useState<"en" | "es">("en");

  const text = {
    en: {
      orderNow: "Order now",
      quoteNow: "Get a quote and order",
      viewOptions: "View options",
      heroTitle: "Special events deserve delicious details",
      heroText:
        "Chocolate-covered strawberries, custom boxes, premium charcuterie, and sweet treats for birthdays, anniversaries, baby showers, gatherings, and special gifts.",
      heroNote: "Custom orders · Local delivery · Fast response",
      limited: "⚠️ Limited spots available daily · Order in advance",
      catalog: "Catalog",
      popular: "Most requested options",
      gallery: "Gallery",
      galleryTitle: "Choose your order style",
      galleryText: "Browse our options by category to find what you need faster.",
      charcuterie: "Charcuterie",
      strawberries: "Chocolate-covered strawberries",
      bakery: "Bakery",
      varieties: "Varieties",
      varietiesText:
        "Chocolate-covered cookies, chocolate-covered marshmallows, and decorated madeleines.",
      trust1Title: "Custom orders",
      trust1Text: "Colors, letters, and details based on the occasion.",
      trust2Title: "Premium presentation",
      trust2Text: "Designs ready for gifting or events.",
      trust3Title: "Order by WhatsApp",
      trust3Text: "Fast response to confirm availability.",
      howToOrder: "How to order",
      easyOrders: "Easy and fast orders",
      contact: "Contact",
      reserve: "Reserve your order in advance",
      localDelivery: "Location: Merritt Island, FL",
      notice: "Orders with 24–48 hours notice",
      makeOrder: "Place your order",
      makeOrderText:
        "Message us on WhatsApp to confirm availability, price, and design.",
      sendWhatsapp: "Send order by WhatsApp",
      floating: "Order",
      whatsappMessage:
        "Hi, I would like to get a quote for an order.\n\nProduct:\nDate:\nQuantity:\nDesign or idea:\n\nCan you help me with options and pricing?",
      products: [
        {
          title: "Chocolate-covered strawberries",
          desc: "Decorated boxes with chocolate, colors, and custom details.",
          price: "Starting at $35",
        },
        {
          title: "Charcuterie boards",
          desc: "Cheese, salami, fruit, crackers, and premium presentation.",
          price: "Starting at $55",
        },
        {
          title: "Letter boxes",
          desc: "Initials decorated with strawberries, roses, or charcuterie.",
          price: "Starting at $65",
        },
      ],
      steps: [
        "Choose your product",
        "Pick size and design",
        "Confirm your date",
        "Receive your order ready",
      ],
    },
    es: {
      orderNow: "Ordenar ahora",
      quoteNow: "Cotizar y ordenar ahora",
      viewOptions: "Ver opciones",
      heroTitle: "Eventos especiales merecen detalles deliciosos",
      heroText:
        "Fresas cubiertas, cajas personalizadas, charcutería premium y detalles dulces para cumpleaños, aniversarios, baby showers, reuniones y regalos especiales.",
      heroNote: "Pedidos personalizados · Entregas locales · Atención rápida",
      limited: "⚠️ Cupos limitados por día · Ordena con anticipación",
      catalog: "Catálogo",
      popular: "Opciones más pedidas",
      gallery: "Galería",
      galleryTitle: "Elige el estilo de tu pedido",
      galleryText: "Separamos las opciones para que encuentres rápido lo que necesitas.",
      charcuterie: "Charcutería",
      strawberries: "Fresas cubiertas",
      bakery: "Repostería",
      varieties: "Variedades",
      varietiesText:
        "Galletas cubiertas de chocolate, marshmallows cubiertos y magdalenas decoradas.",
      trust1Title: "Pedidos personalizados",
      trust1Text: "Colores, letras y detalles según la ocasión.",
      trust2Title: "Presentación premium",
      trust2Text: "Diseños listos para regalar o llevar a eventos.",
      trust3Title: "Ordena por WhatsApp",
      trust3Text: "Respuesta rápida para confirmar disponibilidad.",
      howToOrder: "Cómo ordenar",
      easyOrders: "Pedidos fáciles y rápidos",
      contact: "Contacto",
      reserve: "Reserva tu pedido con anticipación",
      localDelivery: "Ubicación: Merritt Island, FL",
      notice: "Pedidos con 24–48 horas de anticipación",
      makeOrder: "Haz tu pedido",
      makeOrderText:
        "Escríbenos por WhatsApp y confirma disponibilidad, precio y diseño.",
      sendWhatsapp: "Enviar pedido por WhatsApp",
      floating: "Ordenar",
      whatsappMessage:
        "Hola, quiero cotizar un pedido.\n\nProducto:\nFecha:\nCantidad:\nDiseño o idea:\n\n¿Me puedes ayudar con opciones y precio?",
      products: [
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
      ],
      steps: [
        "Escoge el producto",
        "Elige tamaño y diseño",
        "Confirma fecha",
        "Recibe tu pedido listo",
      ],
    },
  };

  const t = text[language];

  const whatsappNumber = "18134662672";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    t.whatsappMessage
  )}`;

  const galleryImages = [
    "charcuteria-1.jpg",
    "charcuteria-2.jpg",
    "charcuteria-3.jpg",
    "charcuteria-4.jpg",
    "charcuteria-5.jpg",
    "charcuteria-6.jpg",
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
    "fresas-20.jpg",
    "fresas-21.jpg",
    "fresas-22.jpg",
    "reposteria-1.jpg",
    "reposteria-2.jpg",
    "reposteria-3.jpg",
    "reposteria-4.jpg",
    "variedades-1.jpg",
    "variedades-2.jpg",
    "variedades-3.jpg",
    "variedades-4.jpg",
    "variedades-5.jpg",
    "variedades-7.jpg",
    "variedades-8.jpg",
    "variedades-9.jpg",
    "variedades-10.jpg",
  ];

  const openImage = (img: string) => {
    setSelectedImage(galleryImages.indexOf(img));
  };

  const nextImage = () => {
    if (selectedImage === null) return;
    setSelectedImage((selectedImage + 1) % galleryImages.length);
  };

  const prevImage = () => {
    if (selectedImage === null) return;
    setSelectedImage(
      selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1
    );
  };

  return (
    <main className="min-h-screen bg-[#fff7f8] text-[#3b2528]">
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-[#fff7f8]/90 backdrop-blur border-b border-pink-100">
        <div className="max-w-6xl mx-auto px-5 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Cheeseberry Delights"
              width={42}
              height={42}
              className="rounded-full shadow-sm"
            />
            <span className="font-serif text-lg md:text-2xl font-bold">
              Cheeseberry Delights
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setLanguage(language === "en" ? "es" : "en")}
              className="rounded-full border border-[#8b2f47] text-[#8b2f47] px-4 py-2 text-sm font-semibold bg-white"
            >
              {language === "en" ? "Español" : "English"}
            </button>

            <a href={whatsappLink} target="_blank" rel="noreferrer">
              <Button className="hidden sm:block rounded-full bg-[#8b2f47] text-white px-5 py-2">
                {t.quoteNow}
              </Button>
            </a>
          </div>
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
            {t.heroTitle}
          </h1>

          <p className="mt-5 text-lg text-[#6b4a50]">{t.heroText}</p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <a href={whatsappLink} target="_blank" rel="noreferrer">
              <Button className="rounded-full bg-[#8b2f47] text-white px-8 py-6 text-base shadow-md">
                {t.quoteNow}
              </Button>
            </a>

            <a href="#productos">
              <Button className="rounded-full border border-[#8b2f47] text-[#8b2f47] bg-white px-8 py-6 text-base">
                {t.viewOptions}
              </Button>
            </a>
          </div>

          <p className="mt-4 text-sm text-[#7b5a60]">{t.heroNote}</p>

          <p className="mt-3 text-sm text-[#8b2f47] font-semibold">
            {t.limited}
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
              {t.catalog}
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mt-3">
              {t.popular}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {t.products.map((item) => (
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

                  <a href={whatsappLink} target="_blank" rel="noreferrer">
                    <button className="mt-5 w-full bg-[#8b2f47] text-white py-3 rounded-full font-semibold">
                      {t.quoteNow}
                    </button>
                  </a>
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
            <p className="font-bold text-xl">{t.trust1Title}</p>
            <p className="text-sm mt-2 text-[#6b4a50]">{t.trust1Text}</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <p className="font-bold text-xl">{t.trust2Title}</p>
            <p className="text-sm mt-2 text-[#6b4a50]">{t.trust2Text}</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <p className="font-bold text-xl">{t.trust3Title}</p>
            <p className="text-sm mt-2 text-[#6b4a50]">{t.trust3Text}</p>
          </div>
        </div>
      </section>

      {/* GALERÍA POR CATEGORÍAS */}
      <section id="galeria" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-12">
            <p className="text-[#8b2f47] font-semibold uppercase tracking-[0.2em] text-sm">
              {t.gallery}
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mt-3">
              {t.galleryTitle}
            </h2>
            <p className="mt-4 text-[#6b4a50]">{t.galleryText}</p>
          </div>

          {/* CHARCUTERÍA */}
          <div className="mb-14">
            <h3 className="font-serif text-3xl font-bold mb-6 text-[#3b2528]">
              {t.charcuterie}
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
                <button key={img} onClick={() => openImage(img)}>
                  <Image
                    src={`/${img}`}
                    alt={t.charcuterie}
                    width={400}
                    height={400}
                    className="aspect-square w-full object-cover rounded-3xl shadow-md hover:scale-105 transition"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* FRESAS */}
          <div className="mb-14">
            <h3 className="font-serif text-3xl font-bold mb-6 text-[#3b2528]">
              {t.strawberries}
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
                "fresas-20.jpg",
                "fresas-21.jpg",
                "fresas-22.jpg",
              ].map((img) => (
                <button key={img} onClick={() => openImage(img)}>
                  <Image
                    src={`/${img}`}
                    alt={t.strawberries}
                    width={400}
                    height={400}
                    className="aspect-square w-full object-cover rounded-3xl shadow-md hover:scale-105 transition"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* REPOSTERÍA */}
          <div className="mb-14">
            <h3 className="font-serif text-3xl font-bold mb-6 text-[#3b2528]">
              {t.bakery}
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "reposteria-1.jpg",
                "reposteria-2.jpg",
                "reposteria-3.jpg",
                "reposteria-4.jpg",
              ].map((img) => (
                <button key={img} onClick={() => openImage(img)}>
                  <Image
                    src={`/${img}`}
                    alt={t.bakery}
                    width={400}
                    height={400}
                    className="aspect-square w-full object-cover rounded-3xl shadow-md hover:scale-105 transition"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* VARIEDADES */}
          <div>
            <h3 className="font-serif text-3xl font-bold mb-6 text-[#3b2528]">
              {t.varieties}
            </h3>

            <p className="text-[#6b4a50] mb-6">{t.varietiesText}</p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "variedades-1.jpg",
                "variedades-2.jpg",
                "variedades-3.jpg",
                "variedades-4.jpg",
                "variedades-5.jpg",
                "variedades-7.jpg",
                "variedades-8.jpg",
                "variedades-9.jpg",
                "variedades-10.jpg",
              ].map((img) => (
                <button key={img} onClick={() => openImage(img)}>
                  <Image
                    src={`/${img}`}
                    alt={t.varieties}
                    width={400}
                    height={400}
                    className="aspect-square w-full object-cover rounded-3xl shadow-md hover:scale-105 transition"
                  />
                </button>
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
              {t.howToOrder}
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mt-3">
              {t.easyOrders}
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-5">
            {t.steps.map((step, i) => (
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
              {t.contact}
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mt-3 mb-5">
              {t.reserve}
            </h2>

            <p className="mb-4 flex gap-3 text-[#6b4a50]">
              <Phone className="text-[#8b2f47]" /> WhatsApp: (813) 466-2672
            </p>
            <p className="mb-4 flex gap-3 text-[#6b4a50]">
              <Camera className="text-[#8b2f47]" /> Instagram:
              @cheesebrry_delights
            </p>
            <p className="mb-4 flex gap-3 text-[#6b4a50]">
              <MapPin className="text-[#8b2f47]" /> {t.localDelivery}
            </p>
            <p className="flex gap-3 text-[#6b4a50]">
              <CalendarCheck className="text-[#8b2f47]" /> {t.notice}
            </p>
          </div>

          <div className="bg-[#fff7f8] p-8 rounded-3xl border border-pink-100 shadow-lg">
            <h3 className="font-serif text-3xl font-bold mb-4">
              {t.makeOrder}
            </h3>
            <p className="text-[#6b4a50] mb-6">{t.makeOrderText}</p>

            <a href={whatsappLink} target="_blank" rel="noreferrer">
              <Button className="w-full bg-[#8b2f47] text-white rounded-full py-6 text-base">
                {t.sendWhatsapp}
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* BOTÓN FLOTANTE */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white px-5 py-4 rounded-full shadow-xl hover:scale-110 transition font-semibold"
      >
        💬 {t.floating}
      </a>

      {/* VISOR DE IMÁGENES */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center px-4">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-white"
          >
            <X size={36} />
          </button>

          <button
            onClick={prevImage}
            className="absolute left-4 text-white bg-white/10 p-3 rounded-full"
          >
            <ChevronLeft size={36} />
          </button>

          <Image
            src={`/${galleryImages[selectedImage]}`}
            alt="Imagen ampliada"
            width={1000}
            height={1000}
            className="max-h-[85vh] w-auto object-contain rounded-2xl"
          />

          <button
            onClick={nextImage}
            className="absolute right-4 text-white bg-white/10 p-3 rounded-full"
          >
            <ChevronRight size={36} />
          </button>
        </div>
      )}
    </main>
  );
}