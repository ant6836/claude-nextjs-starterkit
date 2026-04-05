import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, Layers, Palette, Zap } from "lucide-react";

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl space-y-16 px-4 py-12">
      {/* Hero */}
      <section className="space-y-4 text-center">
        <Badge variant="secondary" className="mb-2">
          Next.js 16 + TailwindCSS v4 + shadcn/ui
        </Badge>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          빠르게 시작하는 웹 개발
        </h1>
        <p className="mx-auto max-w-xl text-lg text-muted-foreground">
          최신 기술 스택으로 구성된 스타터 킷입니다. 바로 개발을 시작하세요.
        </p>
        <div className="flex justify-center gap-3">
          <Button size="lg">
            시작하기 <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="outline" size="lg">
            문서 보기
          </Button>
        </div>
      </section>

      {/* 기능 카드 */}
      <section className="grid gap-4 sm:grid-cols-3">
        <Card>
          <CardHeader>
            <Zap className="h-8 w-8 text-primary" />
            <CardTitle>Next.js 16</CardTitle>
            <CardDescription>App Router, Turbopack, RSC 지원</CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <Palette className="h-8 w-8 text-primary" />
            <CardTitle>TailwindCSS v4</CardTitle>
            <CardDescription>config 파일 없는 CSS-first 방식</CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <Layers className="h-8 w-8 text-primary" />
            <CardTitle>shadcn/ui</CardTitle>
            <CardDescription>접근성 높은 컴포넌트 라이브러리</CardDescription>
          </CardHeader>
        </Card>
      </section>

      <Separator />

      {/* 컴포넌트 쇼케이스 */}
      <section id="components" className="space-y-10">
        <h2 className="text-2xl font-semibold">컴포넌트 쇼케이스</h2>

        {/* Button */}
        <div className="space-y-3">
          <h3 className="text-sm font-medium text-muted-foreground">Button</h3>
          <div className="flex flex-wrap gap-3">
            <Button>Default</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="link">Link</Button>
            <Button disabled>Disabled</Button>
          </div>
        </div>

        {/* Badge */}
        <div className="space-y-3">
          <h3 className="text-sm font-medium text-muted-foreground">Badge</h3>
          <div className="flex flex-wrap gap-3">
            <Badge>Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="outline">Outline</Badge>
            <Badge variant="destructive">Destructive</Badge>
          </div>
        </div>

        {/* Card */}
        <div className="space-y-3">
          <h3 className="text-sm font-medium text-muted-foreground">Card</h3>
          <Card className="max-w-sm">
            <CardHeader>
              <CardTitle>카드 타이틀</CardTitle>
              <CardDescription>카드 설명 텍스트입니다.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                카드 본문 내용이 여기에 들어갑니다.
              </p>
            </CardContent>
            <CardFooter className="gap-2">
              <Button size="sm">확인</Button>
              <Button size="sm" variant="outline">
                취소
              </Button>
            </CardFooter>
          </Card>
        </div>

        {/* Input + Label */}
        <div className="space-y-3">
          <h3 className="text-sm font-medium text-muted-foreground">
            Input &amp; Label
          </h3>
          <div className="max-w-sm space-y-4">
            <div className="space-y-1.5">
              <Label htmlFor="email">이메일</Label>
              <Input id="email" type="email" placeholder="name@example.com" />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="password">비밀번호</Label>
              <Input id="password" type="password" placeholder="••••••••" />
            </div>
            <Button className="w-full">로그인</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
