import { createFileRoute } from '@tanstack/react-router';
import { Login } from '@/components/omnitrade/workspaces';
export const Route = createFileRoute('/login')({head:()=>({meta:[{title:'Enterprise SSO | OmniTrade AI'},{name:'description',content:'Secure enterprise workspace sign-in prototype.'},{property:'og:title',content:'Enterprise SSO | OmniTrade AI'},{property:'og:description',content:'Secure enterprise workspace sign-in prototype.'},{property:'og:type',content:'website'},{name:'twitter:card',content:'summary_large_image'}]}),component:Login});
