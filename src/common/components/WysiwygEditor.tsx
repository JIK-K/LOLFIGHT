import '@toast-ui/editor/dist/toastui-editor.css' 
import '@toast-ui/editor/dist/theme/toastui-editor-dark.css' 
import 'tui-color-picker/dist/tui-color-picker.css' 
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css'
import { Editor } from '@toast-ui/react-editor'
import colorSyntax from '@toast-ui/editor-plugin-color-syntax'
import { useRef } from 'react' 

const WysiwygEditor = () => { 

	const editorIns = editorRef.current?.getInstance(); 
    const toolbarItems = [ ['heading', 'bold', 'italic', 'strike'], ['hr'], ['ul', 'ol', 'task'], ['table', 'link'], ['image'], ['code'], ['scrollSync'], ] 
    
    const showContent = () => { 
    	const editorIns = editorRef?.current?.getInstance(); 
        const contentHtml = editorIns?.getHTML(); 
        const contentMark = editorIns?.getMarkdown(); 
        console.log(contentHtml); 
        console.log(contentMark); 
    } 
    
    return( 
    	<> 
        	<Editor ref={editorRef} initialValue='' // 글 수정 시 사용 
            initialEditType='wysiwyg' // wysiwyg & markdown 
            hideModeSwitch={true} 
            height='500px' 
            theme={''} // '' & 'dark' 
            usageStatistics={false} 
            toolbarItems={toolbarItems} 
            plugins={[colorSyntax, ]} /> 
            
            <button onClick={showContent}>Write</button> 
        </> 
    ) 
    
}

export default WysiwygEditor