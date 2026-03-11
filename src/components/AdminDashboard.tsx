import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Plus, Save, Trash2, X, Database, Cloud, AlertCircle, Edit2, Cpu } from 'lucide-react';
import { Service } from '../types';
import { cn } from '../lib/utils';
import {
  TEXT_MODELS, IMAGE_MODELS,
  getTextModel, getImageModel, setTextModel, setImageModel
} from '../services/geminiService';

interface AdminDashboardProps {
  services: Service[];
  onUpdateServices: (services: Service[]) => void;
}

const ICON_OPTIONS = [
  'Layout', 'Palette', 'Box', 'Gift', 'Package', 'Camera', 'Cpu', 'Monitor', 'ShoppingCart'
];

export default function AdminDashboard({ services, onUpdateServices }: AdminDashboardProps) {
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editDraft, setEditDraft] = useState<Service | null>(null);
  const [dbStatus, setDbStatus] = useState<{ firebase: string; postgres: string } | null>(null);
  const [saveStatus, setSaveStatus] = useState<'idle' | 'saving' | 'saved' | 'error'>('idle');
  const [activeTab, setActiveTab] = useState<'services' | 'models'>('services');
  const [currentTextModel, setCurrentTextModel] = useState(getTextModel);
  const [currentImageModel, setCurrentImageModel] = useState(getImageModel);
  const [modelSaved, setModelSaved] = useState(false);
  const [newService, setNewService] = useState<Partial<Service>>({
    icon: 'Layout',
    category: 'General'
  });

  useEffect(() => {
    const checkStatus = async () => {
      try {
        const res = await fetch('/api/db-status');
        if (res.ok) setDbStatus(await res.json());
      } catch (err) {
        console.error('Failed to check DB status:', err);
      }
    };
    checkStatus();
    const interval = setInterval(checkStatus, 30000);
    return () => clearInterval(interval);
  }, []);

  const startEdit = (service: Service) => {
    setEditingId(service.id);
    setEditDraft({ ...service });
    setSaveStatus('idle');
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditDraft(null);
    setSaveStatus('idle');
  };

  const commitEdit = async () => {
    if (!editDraft) return;
    setSaveStatus('saving');
    const updated = services.map(s => s.id === editDraft.id ? editDraft : s);
    try {
      await onUpdateServices(updated);
      setSaveStatus('saved');
      setTimeout(() => {
        setEditingId(null);
        setEditDraft(null);
        setSaveStatus('idle');
      }, 800);
    } catch {
      setSaveStatus('error');
    }
  };

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this service?')) {
      onUpdateServices(services.filter(s => s.id !== id));
    }
  };

  const handleAdd = async () => {
    if (!newService.title || !newService.description) return;
    const id = newService.title.toLowerCase().replace(/\s+/g, '-');
    await onUpdateServices([...services, { ...newService, id } as Service]);
    setNewService({ icon: 'Layout', category: 'General' });
  };

  const saveModels = () => {
    setTextModel(currentTextModel);
    setImageModel(currentImageModel);
    setModelSaved(true);
    setTimeout(() => setModelSaved(false), 2000);
  };

  const inputClass = "bg-zinc-100 dark:bg-zinc-900 border border-black/10 dark:border-white/10 rounded-xl p-3 text-black dark:text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 w-full";

  return (
    <div className="py-20 px-6 bg-zinc-50 dark:bg-zinc-950 border-t border-black/5 dark:border-white/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-4xl font-black tracking-tighter text-black dark:text-white">ADMIN <span className="text-emerald-500 italic">DASHBOARD</span></h2>

          <div className="flex gap-4">
            <div className={cn(
              "flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold border transition-colors",
              dbStatus?.firebase === 'connected' ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-600" :
              dbStatus?.firebase === 'placeholder' ? "bg-blue-500/10 border-blue-500/20 text-blue-600" :
              "bg-red-500/10 border-red-500/20 text-red-600"
            )}>
              <Cloud size={14} />
              FIREBASE: {dbStatus?.firebase?.toUpperCase() || 'CHECKING...'}
            </div>
            <div className={cn(
              "flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold border transition-colors",
              dbStatus?.postgres === 'connected' ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-600" :
              dbStatus?.postgres === 'not configured' ? "bg-zinc-500/10 border-zinc-500/20 text-zinc-500" :
              "bg-red-500/10 border-red-500/20 text-red-600"
            )}>
              <Database size={14} />
              POSTGRES: {dbStatus?.postgres?.toUpperCase() || 'CHECKING...'}
            </div>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="flex gap-2 mb-10">
          {(['services', 'models'] as const).map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={cn(
                "px-6 py-2.5 rounded-xl font-bold text-sm uppercase tracking-widest transition-all",
                activeTab === tab
                  ? "bg-emerald-500 text-black shadow-lg shadow-emerald-500/20"
                  : "bg-black/5 dark:bg-white/5 text-zinc-600 dark:text-zinc-400 hover:bg-black/10 dark:hover:bg-white/10"
              )}
            >
              {tab === 'services' ? 'Services' : 'AI Models'}
            </button>
          ))}
        </div>

        {dbStatus?.postgres === 'not configured' && activeTab === 'services' && (
          <div className="mb-8 p-4 bg-amber-500/10 border border-amber-500/20 rounded-2xl flex items-center gap-3 text-amber-600 text-sm font-medium">
            <AlertCircle size={18} />
            <span>PostgreSQL backup not configured. Add <strong>DATABASE_URL</strong> to enable data redundancy.</span>
          </div>
        )}

        {/* AI Models Tab */}
        {activeTab === 'models' && (
          <div className="bg-white dark:bg-black border border-black/10 dark:border-white/10 rounded-3xl p-8 shadow-sm dark:shadow-none">
            <h3 className="text-xl font-bold mb-2 flex items-center gap-2 text-black dark:text-white">
              <Cpu className="text-emerald-500" size={20} /> AI Model Settings
            </h3>
            <p className="text-zinc-500 text-sm mb-8">Choose which Gemini models to use for blog content and image generation. Settings are saved locally in your browser.</p>

            <div className="space-y-8">
              {/* Text Model */}
              <div>
                <label className="block text-sm font-bold uppercase tracking-widest text-zinc-500 mb-4">
                  Text / Content Model
                </label>
                <div className="grid grid-cols-1 gap-3">
                  {TEXT_MODELS.map(m => (
                    <button
                      key={m.id}
                      onClick={() => setCurrentTextModel(m.id)}
                      className={cn(
                        "flex items-center justify-between p-4 rounded-2xl border text-left transition-all",
                        currentTextModel === m.id
                          ? "bg-emerald-500/10 border-emerald-500/40 text-black dark:text-white"
                          : "bg-zinc-50 dark:bg-zinc-900 border-black/10 dark:border-white/10 text-zinc-600 dark:text-zinc-400 hover:border-emerald-500/30"
                      )}
                    >
                      <div>
                        <p className="font-bold text-sm">{m.label}</p>
                        <p className="text-xs text-zinc-400 mt-0.5 font-mono">{m.id}</p>
                      </div>
                      {currentTextModel === m.id && (
                        <div className="w-3 h-3 rounded-full bg-emerald-500 shrink-0" />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Image Model */}
              <div>
                <label className="block text-sm font-bold uppercase tracking-widest text-zinc-500 mb-4">
                  Image Generation Model
                </label>
                <div className="grid grid-cols-1 gap-3">
                  {IMAGE_MODELS.map(m => (
                    <button
                      key={m.id}
                      onClick={() => setCurrentImageModel(m.id)}
                      className={cn(
                        "flex items-center justify-between p-4 rounded-2xl border text-left transition-all",
                        currentImageModel === m.id
                          ? "bg-emerald-500/10 border-emerald-500/40 text-black dark:text-white"
                          : "bg-zinc-50 dark:bg-zinc-900 border-black/10 dark:border-white/10 text-zinc-600 dark:text-zinc-400 hover:border-emerald-500/30"
                      )}
                    >
                      <div>
                        <p className="font-bold text-sm">{m.label}</p>
                        <p className="text-xs text-zinc-400 mt-0.5 font-mono">{m.id}</p>
                      </div>
                      {currentImageModel === m.id && (
                        <div className="w-3 h-3 rounded-full bg-emerald-500 shrink-0" />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={saveModels}
                className="w-full bg-emerald-500 text-black font-bold py-4 rounded-xl hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/20"
              >
                {modelSaved ? '✓ Models Saved!' : 'SAVE MODEL SETTINGS'}
              </button>
            </div>
          </div>
        )}

        {activeTab === 'services' && <>{/* Add New Service */}
        <div className="bg-white dark:bg-black border border-black/10 dark:border-white/10 rounded-3xl p-8 mb-12 shadow-sm dark:shadow-none">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-black dark:text-white">
            <Plus className="text-emerald-500" /> Add New Service
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Service Title *"
              className={inputClass}
              value={newService.title || ''}
              onChange={e => setNewService({ ...newService, title: e.target.value })}
            />
            <input
              type="text"
              placeholder="Category"
              className={inputClass}
              value={newService.category || ''}
              onChange={e => setNewService({ ...newService, category: e.target.value })}
            />
            <textarea
              placeholder="Short Description *"
              className={cn(inputClass, "md:col-span-2 h-24 resize-none")}
              value={newService.description || ''}
              onChange={e => setNewService({ ...newService, description: e.target.value })}
            />
            <textarea
              placeholder="Long Description (Markdown supported)"
              className={cn(inputClass, "md:col-span-2 h-32 resize-none")}
              value={newService.longDescription || ''}
              onChange={e => setNewService({ ...newService, longDescription: e.target.value })}
            />
            <input
              type="text"
              placeholder="Featured Image URL"
              className={cn(inputClass, "md:col-span-2")}
              value={newService.imageUrl || ''}
              onChange={e => setNewService({ ...newService, imageUrl: e.target.value })}
            />
            <input
              type="text"
              placeholder="External Link (optional)"
              className={cn(inputClass, "md:col-span-2")}
              value={newService.externalLink || ''}
              onChange={e => setNewService({ ...newService, externalLink: e.target.value })}
            />
            <textarea
              placeholder="Service Updates"
              className={cn(inputClass, "md:col-span-2 h-20 resize-none")}
              value={newService.updates || ''}
              onChange={e => setNewService({ ...newService, updates: e.target.value })}
            />
            <textarea
              placeholder="Additional Information"
              className={cn(inputClass, "md:col-span-2 h-20 resize-none")}
              value={newService.additionalInfo || ''}
              onChange={e => setNewService({ ...newService, additionalInfo: e.target.value })}
            />
            <div className="md:col-span-2">
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-3">Select Icon</p>
              <div className="flex flex-wrap gap-3">
                {ICON_OPTIONS.map(icon => (
                  <button
                    key={icon}
                    onClick={() => setNewService({ ...newService, icon })}
                    className={cn(
                      "px-4 py-2 rounded-lg border text-sm font-medium transition-all",
                      newService.icon === icon
                        ? "bg-emerald-500 border-emerald-500 text-black"
                        : "bg-zinc-100 dark:bg-zinc-900 border-black/10 dark:border-white/10 text-zinc-500 hover:border-emerald-500/50"
                    )}
                  >
                    {icon}
                  </button>
                ))}
              </div>
            </div>
            <button
              onClick={handleAdd}
              disabled={!newService.title || !newService.description}
              className="md:col-span-2 bg-emerald-500 text-black font-bold py-4 rounded-xl hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/20 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              ADD SERVICE
            </button>
          </div>
        </div>

        {/* Manage Existing Services */}
        <h3 className="text-xl font-bold mb-6 text-black dark:text-white">Manage Services ({services.length})</h3>
        <div className="grid grid-cols-1 gap-6">
          {services.map(service => (
            <div key={service.id} className="bg-white dark:bg-black border border-black/10 dark:border-white/10 rounded-3xl p-8 shadow-sm dark:shadow-none">
              {editingId === service.id && editDraft ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Title"
                    className={inputClass}
                    value={editDraft.title}
                    onChange={e => setEditDraft({ ...editDraft, title: e.target.value })}
                  />
                  <input
                    type="text"
                    placeholder="Category"
                    className={inputClass}
                    value={editDraft.category}
                    onChange={e => setEditDraft({ ...editDraft, category: e.target.value })}
                  />
                  <textarea
                    placeholder="Short Description"
                    className={cn(inputClass, "md:col-span-2 h-24 resize-none")}
                    value={editDraft.description}
                    onChange={e => setEditDraft({ ...editDraft, description: e.target.value })}
                  />
                  <textarea
                    placeholder="Long Description (Markdown supported)"
                    className={cn(inputClass, "md:col-span-2 h-32 resize-none")}
                    value={editDraft.longDescription || ''}
                    onChange={e => setEditDraft({ ...editDraft, longDescription: e.target.value })}
                  />
                  <input
                    type="text"
                    placeholder="Featured Image URL"
                    className={cn(inputClass, "md:col-span-2")}
                    value={editDraft.imageUrl || ''}
                    onChange={e => setEditDraft({ ...editDraft, imageUrl: e.target.value })}
                  />
                  <input
                    type="text"
                    placeholder="External Link (optional)"
                    className={cn(inputClass, "md:col-span-2")}
                    value={editDraft.externalLink || ''}
                    onChange={e => setEditDraft({ ...editDraft, externalLink: e.target.value })}
                  />
                  <textarea
                    placeholder="Service Updates"
                    className={cn(inputClass, "md:col-span-2 h-20 resize-none")}
                    value={editDraft.updates || ''}
                    onChange={e => setEditDraft({ ...editDraft, updates: e.target.value })}
                  />
                  <textarea
                    placeholder="Additional Information"
                    className={cn(inputClass, "md:col-span-2 h-20 resize-none")}
                    value={editDraft.additionalInfo || ''}
                    onChange={e => setEditDraft({ ...editDraft, additionalInfo: e.target.value })}
                  />
                  <div className="md:col-span-2 flex items-center justify-between">
                    <div className="flex gap-2">
                      <button onClick={cancelEdit} className="flex items-center gap-2 px-5 py-2.5 bg-zinc-100 dark:bg-zinc-900 text-black dark:text-white rounded-xl font-medium hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-all">
                        <X size={16} /> Cancel
                      </button>
                      <button
                        onClick={commitEdit}
                        disabled={saveStatus === 'saving'}
                        className="flex items-center gap-2 px-5 py-2.5 bg-emerald-500 text-black rounded-xl font-bold hover:bg-emerald-400 transition-all disabled:opacity-60"
                      >
                        <Save size={16} />
                        {saveStatus === 'saving' ? 'Saving...' : saveStatus === 'saved' ? 'Saved!' : 'Save Changes'}
                      </button>
                    </div>
                    {saveStatus === 'error' && (
                      <span className="text-red-500 text-sm font-medium">Save failed. Try again.</span>
                    )}
                  </div>
                </div>
              ) : (
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                  <div className="flex-1">
                    <span className="text-xs font-bold text-emerald-600 dark:text-emerald-500 uppercase tracking-widest">{service.category}</span>
                    <h4 className="text-2xl font-bold text-black dark:text-white mt-1">{service.title}</h4>
                    <p className="text-zinc-600 dark:text-zinc-500 text-sm mt-1 line-clamp-2">{service.description}</p>
                    {service.imageUrl && (
                      <p className="text-xs text-zinc-400 mt-2 truncate max-w-sm">🖼 {service.imageUrl}</p>
                    )}
                  </div>
                  <div className="flex gap-2 shrink-0">
                    <button
                      onClick={() => startEdit(service)}
                      className="flex items-center gap-2 px-4 py-2.5 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl hover:bg-black/10 dark:hover:bg-white/10 transition-all text-black dark:text-white text-sm font-medium"
                    >
                      <Edit2 size={16} /> Edit
                    </button>
                    <button
                      onClick={() => handleDelete(service.id)}
                      className="p-2.5 bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-500 rounded-xl hover:bg-red-500/20 transition-all"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        </>}
      </div>
    </div>
  );
}
