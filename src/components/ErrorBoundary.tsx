import React, { Component, ErrorInfo, ReactNode } from "react";
import { ShieldAlert, RotateCcw } from "lucide-react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught Finders Guild UI error:", error, errorInfo);
  }

  private handleReload = () => {
    window.location.reload();
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#040711] text-slate-100 flex items-center justify-center p-6 text-center">
          <div className="max-w-md w-full glass-panel p-8 rounded-2xl border border-rose-500/30 bg-[#070c18] shadow-2xl">
            <div className="w-12 h-12 rounded-xl bg-rose-950/60 border border-rose-500/40 flex items-center justify-center text-rose-400 mx-auto mb-4">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <h2 className="font-serif-display text-xl font-bold text-white mb-2">
              Gateway Session Interrupted
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mb-6 leading-relaxed">
              An unexpected display exception occurred. You can reload to restore full network connectivity and state.
            </p>
            <button
              onClick={this.handleReload}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold tracking-wider uppercase transition-all shadow-lg cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Reload Gateway</span>
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
