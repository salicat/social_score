// src/app/page.tsx
import ReduxProvider from '../providers/ReduxProvider';
import SearchForm from '../components/SearchForm';
import Results from '../components/Results';

export default function Home() {
  return (
    <ReduxProvider>
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">SocialScore</h1>
        <SearchForm />
        <Results />
      </div>
    </ReduxProvider>
  );
}