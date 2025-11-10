import FileUploader from '../FileUploader';

export default function FileUploaderExample() {
  return (
    <div className="p-6 max-w-2xl">
      <FileUploader
        onFilesSelected={(files) => console.log('Files selected:', files)}
        maxFiles={5}
        maxSizeMB={10}
      />
    </div>
  );
}
