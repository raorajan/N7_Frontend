$ErrorActionPreference = "Stop"

# Move files from frontend to root
Write-Host "Moving Next.js files to root..."
Move-Item -Path .\frontend\* -Destination .\ -Force
Move-Item -Path .\frontend\.* -Destination .\ -Force
Remove-Item -Path .\frontend -Recurse -Force

# Create directories
Write-Host "Creating directory structure..."
$dirs = @(
  "src\app",
  "src\components\common\Button",
  "src\components\common\Container",
  "src\components\common\SectionHeading",
  "src\components\common\Navbar",
  "src\components\common\Footer",
  "src\components\common\Logo",
  "src\components\common\Badge",
  "src\components\common\Card",
  "src\components\common\IconBox",
  "src\components\common\GlowBackground",
  "src\components\common\GridOverlay",
  "src\components\ui\AnimatedText",
  "src\components\ui\FadeIn",
  "src\components\ui\MagneticButton",
  "src\components\ui\GlassCard",
  "src\components\ui\GradientBorder",
  "src\components\ui\RevealText",
  "src\components\ui\AnimatedBorder",
  "src\components\ui\HoverCard",
  "src\components\ui\GradientButton",
  "src\components\ui\ParallaxWrapper",
  "src\components\sections\Hero",
  "src\components\sections\Solutions",
  "src\components\sections\BankingCore",
  "src\components\sections\Analytics",
  "src\components\sections\Paperless",
  "src\components\sections\MobileBanking",
  "src\components\sections\Insights",
  "src\components\sections\CaseStudies",
  "src\components\sections\CTA",
  "src\components\sections\FooterSection",
  "src\features\home\hooks",
  "src\features\home\utils",
  "src\features\home\constants",
  "src\features\home\types",
  "src\features\animations",
  "src\hooks",
  "src\lib",
  "src\styles",
  "src\data",
  "public\images\hero",
  "public\images\mobile",
  "public\images\dashboard",
  "public\images\logos",
  "public\images\icons",
  "public\svgs",
  "public\fonts",
  "src\types",
  "src\config"
)

foreach ($dir in $dirs) {
  if (-not (Test-Path $dir)) {
    New-Item -ItemType Directory -Force -Path $dir | Out-Null
  }
}

# Create specific files
Write-Host "Creating files..."
$files = @(
  "src\app\providers.tsx",
  "src\features\animations\variants.ts",
  "src\features\animations\transitions.ts",
  "src\hooks\useMediaQuery.ts",
  "src\hooks\useScroll.ts",
  "src\hooks\useAnimation.ts",
  "src\lib\fonts.ts",
  "src\lib\utils.ts",
  "src\lib\constants.ts",
  "src\styles\variables.css",
  "src\styles\animations.css",
  "src\styles\scrollbar.css",
  "src\data\navigation.ts",
  "src\data\solutions.ts",
  "src\data\caseStudies.ts",
  "src\data\articles.ts",
  "src\types\global.d.ts",
  "src\types\index.ts",
  "src\config\site.ts",
  "src\config\animation.ts"
)

foreach ($file in $files) {
  if (-not (Test-Path $file)) {
    New-Item -ItemType File -Force -Path $file | Out-Null
  }
}

# Add component index files
Write-Host "Creating component index.tsx files..."
$components = Get-ChildItem -Path "src\components" -Recurse -Directory
foreach ($comp in $components) {
  if ($comp.GetDirectories().Count -eq 0) {
    $indexPath = "$($comp.FullName)\index.tsx"
    if (-not (Test-Path $indexPath)) {
      New-Item -ItemType File -Force -Path $indexPath | Out-Null
    }
  }
}

Write-Host "Done!"
