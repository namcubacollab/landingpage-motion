# Bộ prompt hình ảnh

Công cụ: **image_gen tích hợp**. Không dùng CLI/API bên ngoài. Ngày: 19/10/2026. Các ảnh cuối đều đã lưu trong project; vị trí và credit có tại `asset-manifest.json`.

## 1. Màn mở đầu — design/hero-reference.png

Use case: ui-mockup. Create ONE definitive visual target for a Vietnamese premium automotive interactive editorial, selected concept 'Bên trong cỗ máy điều khiển lực'. Desktop viewport 1440 x 1000. Use the supplied official front-facing white angular 2026 Tesla Roadster photograph exactly as the vehicle image, preserve the car identity and front view. Art direction: beautifully restrained editorial engineering dossier, near black #0b0d0e, ivory typography, vermilion #ff5733 tiny accents, thin grey rules, generous empty space, no cards, no gradients, no fake glowing sci-fi HUD. A small 64px top header: left VnExpress / XE, middle 'HỒ SƠ CÔNG NGHỆ', right 'Mục lục' small icon. Under it a small orange label 'TESLA ROADSTER · GIẢI PHẪU CÔNG NGHỆ'. Enormous condensed type, title on left 'ĐIỀU KHIỂN' and second line 'NHỮNG LỰC' then orange 'VÔ HÌNH'. Upper third left aligned title, small white deck in right column: 'Đằng sau màn bay lộn là một bài toán về không khí, vật liệu và khả năng kiểm soát.' Let supplied car front fill lower half seamlessly into black, no stretching. Small delicate engineering callouts around car label '01 HÚT GẦM', '02 KHÍ ĐỘNG HỌC', '03 ĐÁNH LÁI'. Footer row at bottom: left circular down arrow and 'Cuộn để khám phá', right '05 HỆ THỐNG · 01 CỖ MÁY'. This is one website screenshot with editable-looking typography and true web hierarchy, not poster art, not a device mockup. Intentional large scale car and confident type. Only one screen.

Reference: official Tesla front photo, now `public/assets/aero.jpg`.

## 2. Ngoại thất — public/assets/exterior.webp

Use case: scientific-educational. Asset: hero illustration of 2026 redesigned Tesla Roadster for interactive automotive explainer. Create a high-quality technical product render, full car visible with plenty margin, 1536 x 1024 landscape. Reference photos identify EXACT new ultra-white angular wedge 2026 Roadster, not the curvy red 2017 Roadster. Close both doors. Camera: elevated front-left 3/4 looking towards right side of image, nose towards lower left, rear towards upper right. Pure almost-black background #0b0d0e, floor same near-black with subtle realistic shadow. Body white and black, bronze-tinted canopy, minimalist wheels. Render opaque exterior intact with lights subtly lit, no text, no labels, no arrows, no lines, no other objects, no decorative particles. Keep precise silhouette and car entirely in central 80% image. Beautiful controlled studio rim light, editorial automotive engineering, premium realism. This will be the closed-shell before-image in a reveal-slider; geometry and framing must be clear and consistent.

References: `public/assets/world.jpg` and `public/assets/aero.jpg`.

## 3. Nhìn xuyên — public/assets/cutaway.webp

Use case: scientific-educational, precise-object-edit. Edit the supplied image into an X-RAY technical cutaway view, preserving EXACT pixel registration: exact 1536x1024 canvas, unchanged camera position, wheel positions, car silhouette, scale, nose angle and background. This edited image must overlay the original seamlessly in a horizontal reveal slider. Change ONLY the opaque white body panels and dark glass to translucent smoky-teal ghosted panels, showing a plausible schematic underbody air-extraction chamber, rear fan cluster, structural chassis, front steering actuator and blue electrical control connections through the transparent body. Highlight underbody low-pressure chamber with soft cyan light and narrow cyan air streamlines, highlight structural chassis edges in restrained copper-orange. Keep tires and wheels opaque at exact original positions. Keep front headlight positions, canopy outline, rear wing and all silhouette edges exactly aligned. This is explicitly an explanatory schematic, not an actual engineering drawing. No text, labels, numbers, logos, arrows or UI. Maintain the same near-black #0b0d0e background and lighting outside the vehicle. No explosion or disassembly, no raised panels, no camera change. Sophisticated realistic automotive cutaway render.

Reference: exterior image from step 2.

### Lượt sửa cuối của hình nhìn xuyên

Precise-object-edit for scientific accuracy. Keep this image pixel-identical except the steering connection. The car is steer-by-wire: there must be NO continuous mechanical steering shaft connecting the driver's steering wheel to the front steering rack. Remove any long silver mechanical shaft between the steering wheel in cabin and the front axle/rack. Replace that connection with two very thin restrained cyan electrical signal lines and a small sensor directly behind the steering wheel, leading to a compact actuator on the front rack. Retain transverse front steering rack and wheel suspension. Preserve exactly the camera, 1536x1024 canvas, entire car silhouette, wheel positions, fans, all carbon/copper structure, transparency, lighting and black background. Do not add text, labels, icons, numbers or arrows. This must remain exactly registered with original for a reveal slider. Change only that steering-signal detail.

Reference: first cutaway image. Final original saved as `design/assets/cutaway-final.png`.

## 4. Carbon — public/assets/carbon.webp

Use case: product-mockup. Asset: premium automotive material sample photograph for educational editorial. Single macro photograph of woven carbon fiber composite surface, square 1024x1024, very dark graphite-black satin resin, diagonal tight repeating fine weave, soft grazing studio light from top left, realistic microsurface and weave detail, subtle irregular natural variation, quiet precision engineering aesthetic. Uniform full-bleed material surface with no seams, objects, text, labels, typography, logos, gradients or borders. Dark enough that large ivory letters can be overlaid at center. Not an image of a car, no claim of a specific manufacturer's material.

## 5. Magiê — public/assets/magnesium.webp

Use case: product-mockup. Asset: material sample photograph for premium automotive educational editorial. Single macro photograph of a magnesium alloy satin machined surface, square1024x1024. Medium cool gray matte metal, fine subtly grainy granular texture and understated machining marks, grazing studio light from upper left, realistic tiny pores and material character. Uniform full-bleed surface, restrained low exposure so ivory text overlays are readable. No car, objects, blocks, seams, logos, text, letters, numbers, gradients or borders. Material illustration, not a manufacturer's actual component.

## 6. Titanium — public/assets/titanium.webp

Use case: product-mockup. Asset: material sample photograph for premium automotive educational editorial. Single macro photograph of titanium satin brushed surface, square1024x1024. Dark blue-charcoal titanium metal with delicate linear brushing and subtle cool taupe metallic reflections, soft grazing studio light upper left, realistic slight natural tiny scratches, sophisticated controlled low exposure to allow ivory text overlaid center. Uniform full-bleed material texture only. No car, object, block, seams, logos, letters, numbers, gradients or borders. Generic material illustration, not a manufacturer's actual part.

## Chuyển đổi để chạy trên web

Hai hình xe được giữ cùng kích thước 1536×1024, chuyển sang WebP. Texture được tối ưu về 1024×1024 WebP. Các ảnh AI được ghi nhãn minh họa trong nội dung và alt text. Hình minh họa không được dùng như bằng chứng kỹ thuật thực nghiệm.
