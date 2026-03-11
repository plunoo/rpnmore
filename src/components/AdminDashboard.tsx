import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Plus, Save, Trash2, X, Layout, Palette, Box, Gift, Package, Camera, Cpu, Monitor, ShoppingCart, Database, Cloud, AlertCircle } from 'lucide-react';
import { Service } from '../types';
import { cn } from '../lib/utils';

interface AdminDashboardProps {
  services: Service[];
  onUpdateServices: (services: Service[]) => void;
}

const ICON_OPTIONS = [
  'Layout', 'Palette', 'Box', 'Gift', 'Package', 'Camera', 'Cpu', 'Monitor', 'ShoppingCart'
];

export default function AdminDashboard({ services, onUpdateServices }: AdminDashboardProps) {
  const [editingId, setEditingId] = useState<string | null>(null);
  const [dbStatus, setDbStatus] = useState<{ firebase: string; postgres: string } | null>(null);
  const [newService, setNewService] = useState<Partial<Service>>({
    icon: 'Layout',
    category: 'General'
  });

  useEffect(() => {
    const checkStatus = async () => {
      try {
        const res = await fetch('/api/db-status');
        if (res.ok) {
          const data = await res.json();
          setDbStatus(data);
        }
      } catch (err) {
        console.error('Failed to check DB status:', err);
      }
    };
    checkStatus();
    const interval = setInterval(checkStatus, 30000);
    return () => clearInterval(interval);
  }, []);

  const handleSave = (service: Service) => {
    const updated = services.map(s => s.id === service.id ? service : s);
    onUpdateServices(updated);
    setEditingId(null);
  };

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this service?')) {
      onUpdateServices(services.filter(s => s.id !== id));
    }
  };

  const handleAdd = () => {
    if (!newService.title || !newService.description) return;
    const id = newService.title.toLowerCase().replace(/\s+/g, '-');
    onUpdateServices([...services, { ...newService, id } as Service]);
    setNewService({ icon: 'Layout', category: 'General' });
  };

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
              dbStatus?.postgres === 'placeholder' ? "bg-blue-500/10 border-blue-500/20 text-blue-600" :
              dbStatus?.postgres === 'not configured' ? "bg-zinc-500/10 border-zinc-500/20 text-zinc-500" :
              "bg-red-500/10 border-red-500/20 text-red-600"
            )}>
              <Database size={14} />
              POSTGRES: {dbStatus?.postgres?.toUpperCase() || 'CHECKING...'}
            </div>
          </div>
        </div>

        {dbStatus?.postgres === 'not configured' && (
          <div className="mb-8 p-4 bg-amber-500/10 border border-amber-500/20 rounded-2xl flex items-center gap-3 text-amber-600 text-sm font-medium">
            <AlertCircle size={18} />
            <span>PostgreSQL backup is not configured. Add <strong>DATABASE_URL</strong> to your environment variables to enable data redundancy.</span>
          </div>
        )}

        {/* Add New Service */}
        <div className="bg-white dark:bg-black border border-black/10 dark:border-white/10 rounded-3xl p-8 mb-12 shadow-sm dark:shadow-none">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-black dark:text-white"><Plus className="text-emerald-500" /> Add New Service</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input 
              type="text" 
              placeholder="Service Title" 
              className="bg-zinc-100 dark:bg-zinc-900 border border-black/10 dark:border-white/10 rounded-xl p-4 text-black dark:text-white placeholder:text-zinc-500"
              value={newService.title || ''}
              onChange={e => setNewService({...newService, title: e.target.value})}
            />
            <input 
              type="text" 
              placeholder="Category" 
              className="bg-zinc-100 dark:bg-zinc-900 border border-black/10 dark:border-white/10 rounded-xl p-4 text-black dark:text-white placeholder:text-zinc-500"
              value={newService.category || ''}
              onChange={e => setNewService({...newService, category: e.target.value})}
            />
            <textarea 
              placeholder="Short Description" 
              className="bg-zinc-100 dark:bg-zinc-900 border border-black/10 dark:border-white/10 rounded-xl p-4 text-black dark:text-white placeholder:text-zinc-500 md:col-span-2"
              value={newService.description || ''}
              onChange={e => setNewService({...newService, description: e.target.value})}
            />
            <input 
              type="text" 
              placeholder="Featured Image URL" 
              className="bg-zinc-100 dark:bg-zinc-900 border border-black/10 dark:border-white/10 rounded-xl p-4 text-black dark:text-white placeholder:text-zinc-500 md:col-span-2"
              value={newService.imageUrl || ''}
              onChange={e => setNewService({...newService, imageUrl: e.target.value})}
            />
            <textarea 
              placeholder="Service Updates" 
              className="bg-zinc-100 dark:bg-zinc-900 border border-black/10 dark:border-white/10 rounded-xl p-4 text-black dark:text-white placeholder:text-zinc-500 md:col-span-2 h-24"
              value={newService.updates || ''}
              onChange={e => setNewService({...newService, updates: e.target.value})}
            />
            <textarea 
              placeholder="Additional Information" 
              className="bg-zinc-100 dark:bg-zinc-900 border border-black/10 dark:border-white/10 rounded-xl p-4 text-black dark:text-white placeholder:text-zinc-500 md:col-span-2 h-24"
              value={newService.additionalInfo || ''}
              onChange={e => setNewService({...newService, additionalInfo: e.target.value})}
            />
            <div className="flex flex-wrap gap-4 md:col-span-2">
              {ICON_OPTIONS.map(icon => (
                <button 
                  key={icon}
                  onClick={() => setNewService({...newService, icon})}
                  className={cn(
                    "p-3 rounded-lg border transition-all",
                    newService.icon === icon ? "bg-emerald-500 border-emerald-500 text-black" : "bg-zinc-100 dark:bg-zinc-900 border-black/10 dark:border-white/10 text-zinc-500"
                  )}
                >
                  {icon}
                </button>
              ))}
            </div>
            <button 
              onClick={handleAdd}
              className="bg-emerald-500 text-black font-bold py-4 rounded-xl hover:bg-emerald-400 transition-all md:col-span-2 shadow-lg shadow-emerald-500/20"
            >
              ADD SERVICE
            </button>
          </div>
        </div>

        {/* Manage Existing Services */}
        <div className="grid grid-cols-1 gap-6">
          {services.map(service => (
            <div key={service.id} className="bg-white dark:bg-black border border-black/10 dark:border-white/10 rounded-3xl p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-sm dark:shadow-none">
              {editingId === service.id ? (
                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input 
                    type="text" 
                    className="bg-zinc-100 dark:bg-zinc-900 border border-black/10 dark:border-white/10 rounded-xl p-3 text-black dark:text-white"
                    value={service.title}
                    onChange={e => handleSave({...service, title: e.target.value})}
                  />
                  <input 
                    type="text" 
                    className="bg-zinc-100 dark:bg-zinc-900 border border-black/10 dark:border-white/10 rounded-xl p-3 text-black dark:text-white"
                    value={service.category}
                    onChange={e => handleSave({...service, category: e.target.value})}
                  />
                  <textarea 
                    className="bg-zinc-100 dark:bg-zinc-900 border border-black/10 dark:border-white/10 rounded-xl p-3 text-black dark:text-white md:col-span-2"
                    value={service.description}
                    onChange={e => handleSave({...service, description: e.target.value})}
                  />
                  <textarea 
                    placeholder="Long Description (Markdown supported)"
                    className="bg-zinc-100 dark:bg-zinc-900 border border-black/10 dark:border-white/10 rounded-xl p-3 text-black dark:text-white md:col-span-2 h-32"
                    value={service.longDescription || ''}
                    onChange={e => handleSave({...service, longDescription: e.target.value})}
                  />
                  <input 
                    type="text" 
                    placeholder="Featured Image URL"
                    className="bg-zinc-100 dark:bg-zinc-900 border border-black/10 dark:border-white/10 rounded-xl p-3 text-black dark:text-white md:col-span-2"
                    value={service.imageUrl || ''}
                    onChange={e => handleSave({...service, imageUrl: e.target.value})}
                  />
                  <textarea 
                    placeholder="Service Updates"
                    className="bg-zinc-100 dark:bg-zinc-900 border border-black/10 dark:border-white/10 rounded-xl p-3 text-black dark:text-white md:col-span-2 h-24"
                    value={service.updates || ''}
                    onChange={e => handleSave({...service, updates: e.target.value})}
                  />
                  <textarea 
                    placeholder="Additional Information"
                    className="bg-zinc-100 dark:bg-zinc-900 border border-black/10 dark:border-white/10 rounded-xl p-3 text-black dark:text-white md:col-span-2 h-24"
                    value={service.additionalInfo || ''}
                    onChange={e => handleSave({...service, additionalInfo: e.target.value})}
                  />
                  <div className="flex gap-2">
                    <button onClick={() => setEditingId(null)} className="bg-zinc-200 dark:bg-zinc-800 text-black dark:text-white px-6 py-2 rounded-lg">Cancel</button>
                    <button onClick={() => handleSave(service)} className="bg-emerald-500 text-black px-6 py-2 rounded-lg font-bold">Save</button>
                  </div>
                </div>
              ) : (
                <>
                  <div>
                    <span className="text-xs font-bold text-emerald-600 dark:text-emerald-500 uppercase tracking-widest">{service.category}</span>
                    <h4 className="text-2xl font-bold text-black dark:text-white">{service.title}</h4>
                    <p className="text-zinc-600 dark:text-zinc-500 text-sm mt-1">{service.description}</p>
                  </div>
                  <div className="flex gap-2">
                    <button 
                      onClick={() => setEditingId(service.id)}
                      className="p-3 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl hover:bg-black/10 dark:hover:bg-white/10 transition-all text-black dark:text-white"
                    >
                      Edit
                    </button>
                    <button 
                      onClick={() => handleDelete(service.id)}
                      className="p-3 bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-500 rounded-xl hover:bg-red-500/20 transition-all"
                    >
                      <Trash2 size={20} />
                    </button>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
