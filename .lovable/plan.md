

## Adicionar Selo Visual de Garantia de 7 Dias

### Objetivo
Criar um selo visual destacado para a garantia de 7 dias na seção de preço, aumentando a confiança e reduzindo objeções de compra.

### Design do Selo
O selo terá um visual premium alinhado com a estética atual:
- Ícone de escudo com checkmark (usando lucide-react)
- Borda circular/oval com gradiente neon suave
- Texto "Garantia de 7 dias" em destaque
- Subtexto explicativo sobre a política de reembolso
- Efeito de glow sutil para destacar

### Alterações Técnicas

**Arquivo:** `src/components/landing/PricingSection.tsx`

1. Importar o ícone `ShieldCheck` do lucide-react
2. Adicionar um novo bloco visual acima do microcopy atual contendo:
   - Container com borda gradiente e fundo translúcido
   - Ícone de escudo com cor neon
   - Título "Garantia Incondicional de 7 Dias"
   - Texto explicativo: "Se você não gostar, devolvemos 100% do seu dinheiro. Sem perguntas."
3. Manter o microcopy existente abaixo para reforço

### Estrutura Visual

```text
┌─────────────────────────────────────────────┐
│              [Preço atual]                  │
│                                             │
│              [Botão CTA]                    │
│                                             │
│  ┌───────────────────────────────────────┐  │
│  │  🛡️  Garantia Incondicional de 7 Dias │  │
│  │                                       │  │
│  │  Se você não gostar, devolvemos 100%  │  │
│  │  do seu dinheiro. Sem perguntas.      │  │
│  └───────────────────────────────────────┘  │
│                                             │
│    Pagamento seguro • Acesso imediato       │
└─────────────────────────────────────────────┘
```

### Estilização
- Usar classes existentes como `glass-card` para consistência
- Borda com cor `border-primary/30` para tom neon sutil
- Ícone com cor `text-primary` (roxo/rosa neon)
- Background semi-transparente para efeito glassmorphism

