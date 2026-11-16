import { useState } from 'react';
import { Save, Settings2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Switch } from '@/components/ui/switch';

export type WorkspaceSettings = { name: string; workspace: string; dark: boolean; notificationBadge: boolean };

export function SettingsDialog({ value, onClose, onSave }: { value: WorkspaceSettings; onClose: () => void; onSave: (value: WorkspaceSettings) => void }) {
  const [draft, setDraft] = useState(value);
  return <Dialog open onOpenChange={open => { if (!open) onClose(); }}>
    <DialogContent className={`${value.dark ? 'dark' : ''} max-h-[85dvh] w-[calc(100%-2rem)] max-w-xl overflow-y-auto rounded-lg bg-background text-foreground`}>
      <div className="flex items-center gap-3 pr-6"><Settings2 className="size-5 text-primary"/><DialogTitle>Account & workspace settings</DialogTitle></div>
      <DialogDescription>{value.workspace} · Workspace admin</DialogDescription>
      <form className="space-y-6" onSubmit={event => { event.preventDefault(); onSave({ ...draft, name: draft.name.trim(), workspace: draft.workspace.trim() }); }}>
        <section className="space-y-3 border-t border-border pt-5">
          <h2 className="text-sm font-semibold">Profile</h2>
          <label className="block space-y-2 text-sm"><span>Display name</span><input required maxLength={60} pattern=".*\S.*" className="h-10 w-full rounded-md border border-input bg-card px-3 text-foreground" value={draft.name} onChange={event => setDraft({ ...draft, name: event.target.value })}/></label>
          <div className="text-xs text-muted-foreground">Role <span className="ml-2 text-foreground">Workspace admin</span></div>
        </section>
        <section className="space-y-3 border-t border-border pt-5">
          <h2 className="text-sm font-semibold">Workspace</h2>
          <label className="block space-y-2 text-sm"><span>Workspace name</span><input required maxLength={60} pattern=".*\S.*" className="h-10 w-full rounded-md border border-input bg-card px-3 text-foreground" value={draft.workspace} onChange={event => setDraft({ ...draft, workspace: event.target.value })}/></label>
        </section>
        <section className="space-y-4 border-t border-border pt-5">
          <h2 className="text-sm font-semibold">Preferences</h2>
          <div className="flex items-center justify-between gap-4"><label htmlFor="settings-dark" className="text-sm">Dark mode</label><Switch id="settings-dark" checked={draft.dark} onCheckedChange={dark => setDraft({ ...draft, dark })}/></div>
          <div className="flex items-center justify-between gap-4"><label htmlFor="settings-badge" className="text-sm">Unread notification indicator</label><Switch id="settings-badge" checked={draft.notificationBadge} onCheckedChange={notificationBadge => setDraft({ ...draft, notificationBadge })}/></div>
        </section>
        <div className="flex flex-wrap justify-end gap-2 border-t border-border pt-4"><Button type="button" variant="outline" onClick={onClose}>Cancel</Button><Button type="submit"><Save/>Save changes</Button></div>
      </form>
    </DialogContent>
  </Dialog>;
}