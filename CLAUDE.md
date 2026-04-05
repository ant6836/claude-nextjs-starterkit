# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## 주요 명령어

```bash
npm run dev      # 개발 서버 실행 (http://localhost:3000)
npm run build    # 프로덕션 빌드
npm start        # 프로덕션 서버 실행
npm run lint     # ESLint 실행
```

## 아키텍처 개요

**Next.js 16 App Router 기반** 스타터 킷. React Server Components를 기본으로 사용하며, 인터랙티브 요소에만 `"use client"` 적용.

### 레이아웃 흐름

`app/layout.tsx` → Header + `<main>{children}</main>` + Footer 구조. 폰트는 `next/font/google`의 Geist/Geist Mono를 CSS 변수로 주입.

### 스타일 시스템

- **TailwindCSS v4**: 설정 파일 없음 — `app/globals.css`에서 `@import "tailwindcss"`로 직접 임포트
- **테마**: `app/globals.css`에 OKLCh 색공간 기반 CSS 변수 정의, `@theme inline` 지시어로 Tailwind에 주입
- **다크모드**: `useTheme()` 훅 (`hooks/use-theme.ts`)이 `localStorage`와 OS 설정을 참조하여 `<html>` 태그 클래스 토글
- **클래스 조합**: `lib/utils.ts`의 `cn()` 유틸리티 (clsx + tailwind-merge) 사용

### 컴포넌트 구조

- `components/ui/` — shadcn/ui 컴포넌트 (Button, Badge, Card, Input, Label, Separator)
  - Button/Badge는 CVA(Class Variance Authority)로 variant 관리
  - Card는 복합 컴포넌트 패턴 (CardHeader, CardTitle, CardContent 등)
  - `data-slot` 속성으로 스타일 훅 제공
- `components/layout/` — Header(sticky, 테마 토글 포함), Footer

### 경로 별칭

`tsconfig.json`에 `@/*` → 루트 디렉토리로 설정됨. 모든 임포트에 `@/components/...`, `@/lib/...`, `@/hooks/...` 형태 사용.

### shadcn/ui 컴포넌트 추가

```bash
npx shadcn@latest add [component-name]
```

`components.json`에 shadcn 설정이 있으며, 컴포넌트는 `components/ui/`에 추가됨.
