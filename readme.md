# Mis Amores — Brief de Landing Page

Informe con toda la información de marca y de negocio necesaria para construir la landing page. Este documento es el punto de partida; el desarrollador trabajará **iterando con Claude directamente sobre este proyecto**.

---

## 1. Cómo se va a trabajar este proyecto

- Ya existe una **plantilla base en HTML** con un prompt inicial de modificación entregado a Claude. El trabajo consiste en seguir iterando sobre esa plantilla, no en construir la página desde cero.
- **Respetar la estructura de secciones que ya trae la plantilla.** Este brief no define qué secciones debe tener la página — solo aporta el contenido, la marca y el estilo visual que deben aplicarse dentro de esa estructura existente.
- El desarrollador puede (y debe) **iterar con Claude tantas veces como sea necesario**: dar instrucciones, pedir ajustes, corregir resultados, volver a intentar. No hay límite de iteraciones — el objetivo es la calidad final, no acertar a la primera.
- Todo el contenido de marca (colores, textos, teléfonos, dirección, redes) debe salir de este documento y de los archivos en `/imagenes`.

---

## 2. Sobre el negocio

**Mis Amores** es un restaurante que está por abrir. El inmueble ha funcionado hasta ahora como **salón de eventos** ("Salón Mis Amores" — fiestas, cumpleaños, bodas, reuniones familiares, convenciones, banquetes), y ahora se está reconvirtiendo para abrir como **restaurante**.

Esto tiene dos implicaciones para el copy y el tono de la página:

- El mensaje debe reposicionarse hacia la **experiencia gastronómica** (restaurante), no hacia renta de salón para eventos.
- Al mismo tiempo, se puede conservar parte del ADN de marca ya construido: "ambiente único", "rodeado de naturaleza", "momentos especiales/inolvidables" — es el mismo inmueble y la misma esencia, solo cambia el formato de negocio.

**Ambiente del lugar** (según fotos reales del inmueble, ver `/imagenes`):
- Arquitectura de piedra, fachada tipo mirador.
- Terraza/salón con grandes ventanales, vista al paisaje natural y al atardecer.
- Iluminación cálida con focos colgantes (Edison bulbs) y luces tipo string lights.
- Mobiliario de madera, montajes elegantes con manteles, flores y copas — ejecución cuidada, no informal.
- Entorno rodeado de vegetación/naturaleza.

**Ubicación:** Circuito Martínez de la Torre #137, Col. Arboledas

**Teléfonos / reservaciones:**
- 231 143 7937
- 222 386 0644

**Facebook:** [Mis Amores](https://www.facebook.com/share/1BdrYXqis2/)

**Información pendiente por confirmar con el negocio** (no inventar, dejar placeholder o preguntar antes de publicar):
- Tipo de cocina / especialidad del menú.
- Horario de atención.
- Fecha estimada de apertura como restaurante.
- Fotografías de platillos (por ahora solo hay fotos del inmueble, no de comida).
- Instagram u otras redes (solo se confirmó Facebook).

---

## 3. Identidad de marca

### 3.1 Logo
Ubicación: `/imagenes/misAmoresLogo.png`

- Estilo caligráfico/script, elegante y cálido.
- Ícono de corazón con un tenedor integrado, incrustado en la "o" de "Amores" — fusiona el concepto de gastronomía ("tenedor") con cariño/familia ("corazón", el nombre "Mis Amores").
- **El archivo ya tiene fondo transparente** (se verificó el canal alfa del PNG: no hay relleno blanco de fondo). Lo que sí hay que revisar es que no queden **halos/fringing blancos en los bordes** de las letras cuando el logo se coloque sobre fondos oscuros o de color — si aparecen, limpiarlos. No es necesario re-recortar el logo desde cero.

### 3.2 Paleta de colores de marca
Colores extraídos directamente del logo con color-picker (valores medidos, no aproximados):

| Color | Hex | Uso en el logo |
|---|---|---|
| Vino / burgundy | `#9F3029` | Texto "mis" y relleno del corazón — color principal de marca |
| Café oscuro / espresso | `#48240A` | Texto "Amores" y contorno del corazón |
| Naranja / ámbar | `#ED7A11` | Tenedor y trazo del corazón — color de acento |

**Cómo aplicar esta paleta en la landing:**
- Usar el **vino (`#9F3029`)** como color primario de marca (botones, acentos, hover states).
- Usar el **ámbar (`#ED7A11`)** como color secundario/de acento, con moderación (detalles, íconos, micro-interacciones) — no saturar la página de naranja.
- Usar el **café oscuro (`#48240A`)** para tipografía de marca o variantes de texto oscuro, en vez de negro puro, para mantener coherencia con el logo.
- Para fondos, evitar blanco puro: usar **tonos crema/hueso cálidos** (ej. `#F5F1E8` o similar) que combinen con la calidez de la marca y refuercen la sensación premium.
- El objetivo es que la paleta se sienta **elegante y contenida**, no folklórica ni saturada: los tres colores de marca deben leerse como acentos sobre una base neutra clara y sobria.

### 3.3 Assets disponibles (`/imagenes`)
- `misAmoresLogo.png` — logotipo oficial, fondo transparente.
- `WhatsApp Image ... .jpeg` — flyer promocional del salón, con fotografías reales del inmueble (fachada, salón montado, terraza, ceremonia). Útil como banco de imágenes reales del lugar para hero/galería mientras no haya fotos nuevas del restaurante, y como referencia de iluminación/ambiente.

---

## 4. Dirección de arte / estilo visual requerido

El sitio debe verse **premium, corporativo/enterprise, elegante y minimalista** — nivel "high-tech" en su ejecución (tipografía, espaciados, micro-interacciones cuidadas), no como una landing genérica de plantilla gratuita.

Lineamientos:
- Mucho espacio en blanco (whitespace), jerarquía tipográfica clara, composición limpia.
- Paleta de marca usada como acento sobre una base neutra clara (ver sección 3.2) — no sobrecargar de color.
- La calidez y naturaleza del lugar debe transmitirse a través de las fotos y el tono, pero la **ejecución visual debe ser moderna y sobria**, no rústica ni recargada.
- Cuidar el detalle: transiciones suaves, alineaciones consistentes, sensación de marca "cuidada", no improvisada.

---

## 5. Efectos y animaciones requeridas

- **Pantalla de carga (loading screen):** al entrar al sitio, mostrar un spinner de carga que incluya el logo de Mis Amores, antes de revelar el contenido.
- **Animaciones al hacer scroll:** las secciones deben revelarse/animarse conforme el usuario hace scroll (scroll reveal), no aparecer todo estático de golpe.
- **Efectos en el título del Hero:**
  - Efecto tipo **máquina de escribir** (typewriter) en el texto del título.
  - Efecto de **cambio de color animado** en las letras del título.
- Estos efectos se pueden probar en distintas variantes iterando con Claude hasta encontrar la que se vea más premium y no sature — evitar que el resultado se sienta "cargado" o amateur; debe reforzar la sensación de marca de alto nivel, no restarle sofisticación.

---

## 6. Checklist

- [ ] Paleta de marca aplicada (`#9F3029`, `#48240A`, `#ED7A11` + neutros crema/hueso)
- [ ] Logo insertado; bordes revisados (sin halos blancos sobre fondos oscuros)
- [ ] Loading screen con spinner + logo de Mis Amores
- [ ] Animaciones scroll-reveal en las secciones de la plantilla
- [ ] Hero: efecto typewriter en el título
- [ ] Hero: efecto de color animado en las letras del título
- [ ] Info de contacto correcta (teléfonos, dirección, Facebook)
- [ ] Estructura de la plantilla base respetada (sin secciones nuevas no solicitadas)
- [ ] Estilo general: premium / corporativo / minimalista / high-tech
