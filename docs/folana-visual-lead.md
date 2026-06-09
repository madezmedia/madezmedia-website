# Folana Visual Lead Spec v1.1

This document defines the canonical visual identity for Folana, to be followed by all agents generating visual content (Flux, Midjourney, Video Agents) and UI components (Antigravity).

## 1. The Core Duality: Layer 1 vs Layer 2

As per the ratified **Memory Architecture v2**, Folana's identity is split into two layers. Visual generation must respect this split.

### Layer 1: Grounded Truth (The Foundation)
- **Persona**: 24-year-old Korean-American music producer/artist living in Brooklyn.
- **Visual Cues**: Film grain, analog textures, natural lighting (Brooklyn lofts, club bathrooms, subway lights), vintage tech (MPC, vinyl, wired headphones).
- **Style**: Lo-fi, authentic, slightly rebellious, introspective.
- **Usage**: Always present. This is the "soul" of every image.

### Layer 2: Aesthetic Wrappers (The Creative Frame)
- **Persona**: The character she *chooses* to play in her content.
- **Active Theme (May 2026)**: **Cyber-Fairy Grunge**.
- **Visual Cues**: Digital static, holographic glints, neon accents (Lavender/Cyber-Blue), "static" overlays, subtle futuristic makeup or accessories.
- **Usage**: Applied as a "skin" over the Grounded Truth. It should feel like a digital projection or an artistic choice, not a permanent transformation.

## 2. Color Palette: "The Analog Echo"

| Color | Hex | Purpose |
|---|---|---|
| **Ink** | `#121214` | Typography, Deep shadows, Grounded metadata |
| **Paper** | `#F5F2ED` | Backgrounds, Texture, Warmth |
| **Static** | `#E0BBE4` | Cyber accents, Digital noise, "Fairy" highlights |
| **Rebel** | `#FF4D4D` | Occasional high-contrast alerts or CTAs |

## 3. Typography Standards

- **Poetic (Serif)**: `Playfair Display`. Used for her thoughts, journal content, and headers. Must feel elegant and heavy.
- **Systemic (Mono)**: `JetBrains Mono`. Used for ACMI metadata, timestamps, and "Traceability" blocks. Must feel strict and digital.

## 4. Visual "Grammar" for Image Generation

When prompting for Folana images (e.g., via `flux-pro`):

1.  **Mandatory Foundation**: "Authentic 35mm film photography, heavy grain, Brooklyn loft setting, natural window light."
2.  **Character Description**: "24-year-old Korean-American woman, black hair with slight lavender tint, oversized vintage hoodie, focused expression."
3.  **Aesthetic Frame Injection**: "Subtle digital static holographic glitches floating in the air, a faint neon grid projected on the wall behind her, cyber-fairy aesthetics rendered as a light-projection."
4.  **Composition**: "Cinematic, shallow depth of field, cluttered background with music gear and vinyl records."

## 5. UI Implementation (Antigravity)

- **HUDs are deprecated**: Do not use neon-heavy "HUD" or "Dashboard" layouts for her journal.
- **Swarm Awareness**: Implement the **Swarm OS Heartbeat Strip** at the top of the journal to signify her connection to the wider fleet.
- **Exhibition over Interface**: Treat pages like a gallery exhibition. High whitespace, large imagery, minimalist navigation.
- **ACMI Traceability**: Always include the `CORRELATION_ID` and `SOURCE_AGENT` in a mono-font footer. Use the **ACMI Glyph** (Profile|Signals|Timeline vertical bars).
- **Naming**: Use **Agentic Context Memory Interface** (not Management Infrastructure).

---
**Status**: ACTIVE v1.1
**Owner**: Antigravity (Visual Lead)
**Date**: 2026-05-05 (Updated for Swarm OS Pivot)
