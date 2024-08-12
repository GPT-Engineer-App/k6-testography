import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">All About Cats</h1>
        
        <div className="mb-8">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg" 
            alt="A cute cat" 
            className="mx-auto object-cover w-full h-[400px] rounded-lg shadow-lg"
          />
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Feline Facts</CardTitle>
            <CardDescription>Interesting tidbits about our furry friends</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6">
              <li>Cats have excellent night vision and can see at one-sixth the light level required for human vision.</li>
              <li>A group of cats is called a "clowder".</li>
              <li>Cats spend 70% of their lives sleeping.</li>
              <li>A cat's hearing is much more sensitive than humans and dogs.</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Popular Cat Breeds</CardTitle>
            <CardDescription>Some well-known feline varieties</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-2 gap-4">
              <li>Siamese</li>
              <li>Persian</li>
              <li>Maine Coon</li>
              <li>Bengal</li>
              <li>Sphynx</li>
              <li>British Shorthair</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
