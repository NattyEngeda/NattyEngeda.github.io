import { DocumentView } from './components/DocumentView';
import { PDFDownloadLink, Document, Page } from '@react-pdf/renderer';
import { PDFViewer } from '@react-pdf/renderer';

import pdf from '../assets/document/resume.pdf';


export default function Resume() {
  return (
    <div className='flex flex-col gap-10 items-center justify-start px-20 w-full min-h-screen '>
      <PDFDownloadLink document={<DocumentView />} fileName={pdf}>
        {({ blob, url, loading, error }) =>
          loading ? 'Loading document...' : 'Download now!'
        }
      </PDFDownloadLink>
    </div>
  )
}
