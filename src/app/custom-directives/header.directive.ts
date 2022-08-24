import { Directive,ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHeader]'
})
export class HeaderDirective implements OnInit {

 

  constructor(private el:ElementRef,private renderer:Renderer2 ) {}
    // el.nativeElement.style.backgroundColor='purple'
    // el.nativeElement.style.color='white'
    // el.nativeElement.style.height='70px'
    // el.nativeElement.style.display='flex'
    // el.nativeElement.style.justifyContent='space-around'
    // el.nativeElement.style.alignItems='center'
    
  
    

    @Input() color:string='white'
    @Input() backgroundColor:string='purple'
    @Input() height:string='70px'
    @Input() display:string='flex'
    @Input() justifyContent:string='space-around'
    @Input() alignItems:string='center'
    


    @HostBinding('style.color') textcolor!:string
    @HostBinding('style.backgroundColor') background!:string
    @HostBinding('style.height') height1!:string
    @HostBinding('style.display') displayContent!:string
    @HostBinding('style.justifyContent') justifycontent!:string
    @HostBinding('style.alignItems') alignitems!:string
    @HostBinding('style.margin') margin1!:string
    

    ngOnInit(){
      this.textcolor=this.color
      this.background=this.backgroundColor
      this.height1 =this.height
      this.alignitems = this.alignItems
      this.displayContent = this.display
      this.justifycontent = this.justifyContent
      
    }

    // @HostListener('mouseenter') mouseenter(event:Event){
    //   this.background = 'red'
    //   this.textcolor='green'
    // }
    // @HostListener('mouseleave') mouseleave(event:Event){
    //   this.background = 'purple'
    //   this.textcolor='white'
    // }
   
  
  

}
