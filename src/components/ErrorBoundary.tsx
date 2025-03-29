import React from 'react';

interface Props {
    children: React.ReactNode;
}

interface State {
    hasError: boolean;
    error?: Error;
}

export class ErrorBoundary extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error) {
        return { hasError: true, error };
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen bg-background flex items-center justify-center p-4">
                    <div className="max-w-md w-full space-y-4 text-center">
                        <h1 className="text-2xl font-bold text-foreground">Hiba történt</h1>
                        <p className="text-muted-foreground">
                            Sajnáljuk, de valami hiba történt az oldal betöltése közben.
                        </p>
                        <pre className="text-sm bg-muted p-4 rounded-lg overflow-auto">
                            {this.state.error?.message}
                        </pre>
                        <button
                            onClick={() => window.location.reload()}
                            className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                        >
                            Oldal újratöltése
                        </button>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
} 