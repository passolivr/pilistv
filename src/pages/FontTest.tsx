const FontTest = () => {
    return (
        <div className="min-h-screen bg-background p-8">
            <div className="max-w-3xl mx-auto space-y-8">
                <h1 className="text-4xl font-bold text-foreground mb-8">Font Loading Test</h1>

                {/* Neulis Cursive Tests */}
                <div className="space-y-4">
                    <h2 className="text-2xl text-brand-secondary mb-4">Neulis Cursive</h2>
                    <div className="grid gap-4 p-6 glass-card">
                        <p className="font-neulis-cursive font-normal">
                            Regular (400) - Neulis Cursive: The quick brown fox jumps over the lazy dog
                        </p>
                        <p className="font-neulis-cursive font-bold">
                            Bold (700) - Neulis Cursive: The quick brown fox jumps over the lazy dog
                        </p>
                    </div>
                </div>

                {/* Neulis Neue Tests */}
                <div className="space-y-4">
                    <h2 className="text-2xl text-brand-secondary mb-4">Neulis Neue</h2>
                    <div className="grid gap-4 p-6 glass-card">
                        <p className="font-neulis-neue font-normal">
                            Regular (400) - Neulis Neue: The quick brown fox jumps over the lazy dog
                        </p>
                        <p className="font-neulis-neue font-medium">
                            Medium (500) - Neulis Neue: The quick brown fox jumps over the lazy dog
                        </p>
                        <p className="font-neulis-neue font-semibold">
                            SemiBold/Medium (600) - Neulis Neue: The quick brown fox jumps over the lazy dog
                        </p>
                        <p className="font-neulis-neue font-bold">
                            Bold (700) - Neulis Neue: The quick brown fox jumps over the lazy dog
                        </p>
                    </div>
                </div>

                {/* Font Loading Status */}
                <div className="space-y-4">
                    <h2 className="text-2xl text-brand-secondary mb-4">Font Loading Status</h2>
                    <div className="grid gap-4 p-6 glass-card">
                        <div id="fontLoadingStatus" className="space-y-2">
                            <p>Check browser console for font loading details.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Font Loading Detection Script */}
            <script dangerouslySetInnerHTML={{
                __html: `
                    document.fonts.ready.then(() => {
                        const status = document.getElementById('fontLoadingStatus');
                        if (status) {
                            const fonts = [
                                { name: 'Neulis Cursive', weight: 400 },
                                { name: 'Neulis Cursive', weight: 700 },
                                { name: 'Neulis Neue', weight: 400 },
                                { name: 'Neulis Neue', weight: 500 },
                                { name: 'Neulis Neue', weight: 600 },
                                { name: 'Neulis Neue', weight: 700 },
                            ];

                            fonts.forEach(font => {
                                const loaded = document.fonts.check(\`\${font.weight} 16px "\${font.name}"\`);
                                const div = document.createElement('div');
                                div.textContent = \`\${font.name} (\${font.weight}): \${loaded ? '✅ Loaded' : '❌ Not Loaded'}\`;
                                div.style.color = loaded ? 'var(--brand-secondary)' : 'var(--destructive)';
                                status.appendChild(div);
                            });
                        }
                    });
                `
            }} />
        </div>
    );
};

export default FontTest; 